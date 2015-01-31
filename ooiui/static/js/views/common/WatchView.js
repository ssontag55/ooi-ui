"use strict";
/*
* ooiui/static/js/views/common/ChartView.js
* View definitions for charts
*
* Dependencies
* Partials
* - ooiui/static/js/partials/Watch.html
* Libs
* - ooiui/static/lib/underscore/underscore.js
* - ooiui/static/lib/backbone/backbone.js
* - ooiui/static/js/ooi.js
* Models
* - ooiui/static/js/models/common/WatchModel.js
*
* Usage
*/

/*
 * The WatchView will render the watches from the collection as a list-group.
 */
var WatchView = Backbone.View.extend({
  className: 'panel',
  events: {
    'click .watch-item': 'onClick',
    'click #new-watch-link' : 'onNewWatchModal',
    'click #end-watch-link' : 'onEndWatchModal',
    'click #new-watch' : 'onStartNewWatch',
    'click #end-watch' : 'onEndWatch'
  },
  initialize: function(options) {
    _.bindAll(this, "render", "onSync", "onClick", "onLogin", "onLogout", "onNewWatchModal", "onEndWatchModal", "onStartNewWatch", "onEndWatch");
    if(options && options.login) {
      this.login = options.login
      this.listenTo(this.login, "login:success", this.onLogin);
      this.listenTo(this.login, "login:logout", this.onLogout);
    } else {
      console.error("Need login to properly initialize watch view");
    }
    var self = this;
    // We create a comparator for the collection to use as a sorting mechanism.
    // We want to sort the collection by the end_time in reverse order.
    this.collection.comparator = function(model) {
      // We get the milliseconds since 1970-01-01 from parsing the end_time in
      // the model
      var d = model.getEndDate();
      if(d == null) { 
        // if we couldn't parse it, then just use the current timestamp.
        d = new Date(); 
      } else {
        d = new Date(d);
      }
      // Return -d so that the sort is reverse order.
      return -d;
    };
    // Whenever this collection is fetched, call this.onSync
    this.collection.on('sync', this.onSync);
    this.render();
  },
  onClick: function(e) {
    this.trigger('watchview:click', $(e.target).closest('.watch-item').attr('data-id'));
  },
  onEndWatch: function() {
    console.log("End Watch");
    var watchModel = this.collection.at(0);
    watchModel.save();
    console.log(watchModel.toJSON());
  },
  onLogin: function() {
    console.log("WatchView:Logged In");
    this.render();
  },
  onLogout: function() {
    console.log("WatchView:Logged Out");
    this.render();
  },
  onNewWatchModal: function() {
    console.log("New watch");
    this.$el.find('#new-watch-modal').modal('show');
  },
  onEndWatchModal: function() {
    console.log("New watch");
    this.$el.find('#end-watch-modal').modal('show');
  },
  onStartNewWatch: function() {
    var newWatch = new WatchModel();
    newWatch.save(); // Creates a new watch
    this.trigger('watchview:newwatch');
  },
  /*
   * onSync is called whenver the collection is fetched successfully. This
   * allows us to re-render the view.
   */
  onSync: function() {
    console.log("On sync");
    this.render();
  },
  // comment
  template: JST['ooiui/static/js/partials/Watch.html'],
  render: function() {
    var orgSelected = false;
    // Sort by the end date
    this.collection.sort();
    this.$el.html(this.template({collection: this.collection}));
    if(this.login.loggedIn()) {
      console.log("Collection Length");
      console.log(this.collection.length);
      if(this.collection.length > 0) {
        console.log("Collection has len > 0");
        var recentModel = this.collection.at(0);
        if(recentModel.get('end_time') == null) { // open watch
          this.$el.find('#new-watch-dropdown').toggleClass('disabled');
          this.$el.find('#new-watch-link').toggle();
        } else {
          this.$el.find('#new-watch-dropdown').toggleClass('disabled');
          this.$el.find('#end-watch-link').toggle();
        }
      }
    }
  }
});