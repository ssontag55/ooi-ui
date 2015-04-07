module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jst: {
      compile: {
        files: {
          "ooiui/static/js/partials/compiled/index.js" : [
            "ooiui/static/js/partials/TOC.html",
            "ooiui/static/js/partials/TOCItem.html",
            "ooiui/static/js/partials/TOCParentItem.html",
            "ooiui/static/js/partials/InstrumentItem.html",
            "ooiui/static/js/partials/PlatformItem.html",
            "ooiui/static/js/partials/ArrayItem.html",
            "ooiui/static/js/partials/StreamItem.html",
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/TermsDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
             "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/loginDemo.js": [
            /*
            * This is the basic form partial that has the modal dialog
            * prompting the user for username and password
            */
            "ooiui/static/js/partials/loginForm.html",
            /*
            * This is a generic partial for displaying an alert
            */
            "ooiui/static/js/partials/Alert.html",
             "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/newEvent.js": [
            "ooiui/static/js/partials/newEvent.html",
             "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/signup.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/troubleTicket.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/TroubleTicket.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/userEdit.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/UserEditForm.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/users.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/UserTable.html",
            "ooiui/static/js/partials/UserTableItem.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],

          "ooiui/static/js/partials/compiled/FAQ.js" : [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/UserEditForm.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          
          ],
          "ooiui/static/js/partials/compiled/glossary.js" : [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/UserEditForm.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"

          ],

        "ooiui/static/js/partials/compiled/alertPage.js" : [
            "ooiui/static/js/partials/TOC.html",
            "ooiui/static/js/partials/TOCItem.html",
            "ooiui/static/js/partials/ArrayItem.html",
            "ooiui/static/js/partials/StreamItem.html",
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/PlatformItem_AA.html",
            "ooiui/static/js/partials/InstrumentItem_AA.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            'ooiui/static/js/partials/LoggedInNavItems.html',
            'ooiui/static/js/partials/MenuToggle.html',
            "ooiui/static/js/partials/TriggeredAlertDialog.html"
          ],
          
          "ooiui/static/js/partials/compiled/basic.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/TermsDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/svgplot.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/AnnotationTable.html",
            "ooiui/static/js/partials/AnnotationTableItem.html",
            "ooiui/static/js/partials/SVGPlotControl.html",
            "ooiui/static/js/partials/StreamTable.html",
            "ooiui/static/js/partials/StreamTableItem.html",
            "ooiui/static/js/partials/StreamDownloadForm.html",
            "ooiui/static/js/partials/ModalForm.html",
            "ooiui/static/js/partials/ModalDownloadFail.html",
            "ooiui/static/js/partials/ModalDownload.html",
            "ooiui/static/js/partials/AnnotationModalForm.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/plotsDemo.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/TermsDialog.html",
            'ooiui/static/js/partials/AnnotationModal.html',
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            'ooiui/static/js/partials/Chart.html',
            'ooiui/static/js/partials/ChartTypeTemplate.html',
            'ooiui/static/js/partials/ChartFilterTemplate.html',
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/OpLog.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/TermsDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/Chart.html",
            "ooiui/static/js/partials/FakeTable.html",
            "ooiui/static/js/partials/Watch.html",
            "ooiui/static/js/partials/OrgSidebar.html",
            "ooiui/static/js/partials/EventList.html",
            "ooiui/static/js/partials/TimeLineEvent.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/Event.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/landingPages.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/Chart.html",
            "ooiui/static/js/partials/FakeTable.html",
            "ooiui/static/js/partials/OrgSidebar.html",
            "ooiui/static/js/partials/LandingPagesTOC.html",
            "ooiui/static/js/partials/EnduranceArray.html",
            "ooiui/static/js/partials/EnduranceLocationSampling.html",
            "ooiui/static/js/partials/EnduranceDescriptionInfrastructureArray.html",
            "ooiui/static/js/partials/EnduranceStationSummary.html",
            "ooiui/static/js/partials/EnduranceDeploymentSchedule.html",
            "ooiui/static/js/partials/EnduranceInfrastructureTables.html",
            "ooiui/static/js/partials/EnduranceTechnicalDrawings.html",
            "ooiui/static/js/partials/CabledArray.html",
            "ooiui/static/js/partials/CabledArrayLocationSampling.html",
            "ooiui/static/js/partials/CabledArrayPrimaryInfrastructure.html",
            "ooiui/static/js/partials/CabledArraySecondaryInfrastructure.html",
            "ooiui/static/js/partials/CabledArrayStationSummary.html",
            "ooiui/static/js/partials/CabledArrayDeploymentSchedual.html",
            "ooiui/static/js/partials/CabledArrayDetailedInfrastructureTables.html",
            "ooiui/static/js/partials/CabledArrayTechnicalDrawings.html",
            "ooiui/static/js/partials/StationPapa.html",
            "ooiui/static/js/partials/StationPapaTechnicalDrawing.html",
            "ooiui/static/js/partials/StationPapaStationSummary.html",
            "ooiui/static/js/partials/StationPapaLocationSampling.html",
            "ooiui/static/js/partials/StationPapaDetailedInfrastructureTables.html",
            "ooiui/static/js/partials/StationPapaDescriptionInfrastructure.html",
            "ooiui/static/js/partials/StationPapaDeployment.html",
            "ooiui/static/js/partials/IrmingerSea.html",
            "ooiui/static/js/partials/IrmingerSeaLocationSampling.html",
            "ooiui/static/js/partials/IrmingerSeaDescriptionInfrastructure.html",
            "ooiui/static/js/partials/IrmingerSeaStationSummary.html",
            "ooiui/static/js/partials/IrmingerSeaDeployment.html",
            "ooiui/static/js/partials/IrmingerSeaDetailedInfrastructure.html",
            "ooiui/static/js/partials/IrmingerSeaTechnicalDrawings.html",
            "ooiui/static/js/partials/ArgentineBasin.html",
            "ooiui/static/js/partials/ArgentineBasinTechnicalDrawing.html",
            "ooiui/static/js/partials/ArgentineBasinStationSummary.html",
            "ooiui/static/js/partials/ArgentineBasinLocationSampling.html",
            "ooiui/static/js/partials/ArgentineBasinDetailedInfrastructureTables.html",
            "ooiui/static/js/partials/ArgentineBasinDescriptionInfrastructure.html",
            "ooiui/static/js/partials/ArgentineBasinDeployment.html",
            "ooiui/static/js/partials/SouthernOcean.html",
            "ooiui/static/js/partials/SouthernOceanTechnicalDrawing.html",
            "ooiui/static/js/partials/SouthernOceanStationSummary.html",
            "ooiui/static/js/partials/SouthernOceanLocationSampling.html",
            "ooiui/static/js/partials/SouthernOceanDetailedInfrastructureTables.html",
            "ooiui/static/js/partials/SouthernOceanDescriptionInfrastructure.html",
            "ooiui/static/js/partials/SouthernOceanDeployment.html",
            "ooiui/static/js/partials/PioneerArray.html",
            "ooiui/static/js/partials/PioneerLocationSampling.html",
            "ooiui/static/js/partials/PioneerInfrastructureArray.html",
            "ooiui/static/js/partials/PioneerStationSummaryArray.html",
            "ooiui/static/js/partials/PioneerDeploymentSchedule.html",
            "ooiui/static/js/partials/PioneerInfrastructureTables.html",
            "ooiui/static/js/partials/PioneerTechnicalDrawings.html",
            "ooiui/static/js/partials/Watch.html",
            "ooiui/static/js/partials/EventList.html",
            "ooiui/static/js/partials/TimeLineEvent.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/Event.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/js/partials/compiled/StatusUIIcon.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/TermsDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/Chart.html",
            "ooiui/static/js/partials/FakeTable.html",
            "ooiui/static/js/partials/OrgSidebar.html",
            "ooiui/static/js/partials/StatusUIIcon.html",
            "ooiui/static/js/partials/StatusUIItem.html",
            "ooiui/static/js/partials/StatusUIIconView.html",
            "ooiui/static/js/partials/StatusUIIconHeader.html",
            "ooiui/static/js/partials/StatusUIAccordion.html",
            "ooiui/static/js/partials/LoggedInNavItems.html"
          ],
          "ooiui/static/css/compiled/streams.css" : [
            "ooiui/static/css/common/AnnotationTableView.css",
            "ooiui/static/lib/bootstrap-select/dist/css/bootstrap-select.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/newEvent.css",
            "ooiui/static/css/common/ModalForm.css"
          ],
          "ooiui/static/js/partials/compiled/c2.js": [
            "ooiui/static/js/partials/DropdownMessages.html",
            "ooiui/static/js/partials/DropdownMessage.html",
            "ooiui/static/js/partials/DropdownUserLoggedIn.html",
            "ooiui/static/js/partials/DropdownUserLoggedOut.html",
            "ooiui/static/js/partials/LoginForm.html",
            "ooiui/static/js/partials/ModalDialog.html",
            "ooiui/static/js/partials/TermsDialog.html",
            "ooiui/static/js/partials/MissionDialog.html",
            "ooiui/static/js/partials/CommandDialog.html",
            "ooiui/static/js/partials/Navbar.html",
            "ooiui/static/js/partials/MenuToggle.html",
            "ooiui/static/js/partials/Panel.html",
            "ooiui/static/js/partials/Alert.html",
            "ooiui/static/js/partials/Chart.html",
            "ooiui/static/js/partials/FakeTable.html",
            "ooiui/static/js/partials/Watch.html",
            "ooiui/static/js/partials/OrgSidebar.html",
            "ooiui/static/js/partials/ArraySideBar.html",
            "ooiui/static/js/partials/EventList.html",
            "ooiui/static/js/partials/TimeLineEvent.html",
            "ooiui/static/js/partials/NewEvent.html",
            "ooiui/static/js/partials/Event.html",
            "ooiui/static/js/partials/LoggedInNavItems.html",
            "ooiui/static/js/partials/ArraySideBar.html",
            "ooiui/static/js/partials/PlatformStatus.html"
          ]
        }
      }
    },
    concat: {
      js: {
        options: {
          banner: "'use strict';\n",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        files: {
          'ooiui/static/js/compiled/science.js' : [
            // Libs
            'ooiui/static/lib/leaflet/dist/leaflet.js',
            'ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
            'ooiui/static/lib/leaflet.markercluster/dist/leaflet.markercluster.js',
            'ooiui/static/lib/moment/moment.js',
            'ooiui/static/lib/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker.js',
            'ooiui/static/lib/fancytree/dist/jquery.fancytree-all.js',
            // App
            'ooiui/static/js/core/science/map.js',
            'ooiui/static/js/core/science/plot.js',
            'ooiui/static/js/core/science/toc_menu.js',
            'ooiui/static/js/core/science/variable_list.js'
          ],
          'ooiui/static/js/compiled/loginDemo.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js'
          ],
          'ooiui/static/js/compiled/newEvent.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js'
          ],
          'ooiui/static/js/compiled/signup.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/UserFormModel.js',
            'ooiui/static/js/models/common/RoleModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/UserFormView.js'
          ],
          'ooiui/static/js/compiled/troubleTicket.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',
            'ooiui/static/lib/moment/moment.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models/
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/UserFormModel.js',
            'ooiui/static/js/models/common/RoleModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            "ooiui/static/js/views/common/TroubleTicketView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/UserFormView.js'
          ],
          'ooiui/static/js/compiled/userEdit.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',
            'ooiui/static/lib/moment/moment.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/UserFormModel.js',
            'ooiui/static/js/models/common/RoleModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/UserScopeModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/UserEditFormView.js'
          ],
          'ooiui/static/js/compiled/users.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',

            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/UserFormModel.js',
            'ooiui/static/js/models/common/RoleModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/UserTableView.js'
          ],
          'ooiui/static/js/compiled/index.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            "ooiui/static/lib/underscore/underscore.js",
            "ooiui/static/lib/backbone/backbone.js",
            "ooiui/static/lib/leaflet/dist/leaflet.js",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js",
            "ooiui/static/lib/leaflet.markercluster/dist/leaflet.markercluster.js",
            "ooiui/static/lib/metis-menu/dist/metisMenu.js",
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/backlunr/backlunr.js',
            //'ooiui/static/lib/dateformat/dist/dateformat.min.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/asset_management/AssetModel.js',
            'ooiui/static/js/models/asset_management/PlatformDeploymentModel.js',
            'ooiui/static/js/models/science/ArrayModel.js',
            'ooiui/static/js/models/science/StreamModel.js',
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/MapModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            "ooiui/static/js/views/common/SimpleTOCView.js",
            "ooiui/static/js/views/common/MapView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js'
          ],
          'ooiui/static/js/compiled/basic.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            "ooiui/static/lib/loremjs/lorem.js",
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/WatchView.js'
          ],
          'ooiui/static/js/compiled/svgplot.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/moment/moment.js',
            'ooiui/static/lib/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker.js',
            'ooiui/static/lib/bootstrap-select/dist/js/bootstrap-select.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',
            'ooiui/static/lib/bootstrap-switch/dist/js/bootstrap-switch.js',
            //'ooiui/static/lib/lunr.js/lunr.js',
            'ooiui/static/lib/backlunr/backlunr.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/AnnotationModel.js',
            'ooiui/static/js/models/science/StreamModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',

            'ooiui/static/js/views/common/ModalDownloadFailView.js',
            'ooiui/static/js/views/common/ModalDownloadView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/ModalFormView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/WatchView.js',
            'ooiui/static/js/views/common/SVGView.js',
            'ooiui/static/js/views/common/AnnotationModalFormView.js',
            'ooiui/static/js/views/science/AnnotationTableView.js',
            'ooiui/static/js/views/science/StreamTableView.js',
            'ooiui/static/js/views/science/StreamDownloadFormView.js'
          ],
          'ooiui/static/js/compiled/plotsDemo.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/moment/moment.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/js/core/common/utils.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/ChartModel.js',
            'ooiui/static/js/models/common/AnnotationModel.js',
            //Collection
            'ooiui/static/js/collections/ChartCollection.js',
            //Views
            //
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/FakeTableView.js',
            'ooiui/static/js/views/common/ChartView.js',
            'ooiui/static/js/views/common/ChartViews.js',
            'ooiui/static/js/views/common/AddAnnotationView.js'
          ],
          'ooiui/static/js/compiled/FAQ.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            "ooiui/static/lib/underscore/underscore.js",
            "ooiui/static/lib/backbone/backbone.js",
            "ooiui/static/lib/leaflet/dist/leaflet.js",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js",
            "ooiui/static/lib/leaflet.markercluster/dist/leaflet.markercluster.js",
            "ooiui/static/lib/metis-menu/dist/metisMenu.js",
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/backlunr/backlunr.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',

            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/science/InstrumentDeploymentModel.js',
            'ooiui/static/js/models/science/PlatformDeploymentModel.js',
            'ooiui/static/js/models/science/ArrayModel.js',
            'ooiui/static/js/models/science/StreamModel.js',
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/MapModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/TroubleTicketDropdownModel.js',

            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            "ooiui/static/js/views/common/SimpleTOCView.js",
            "ooiui/static/js/views/common/MapView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js'
          ],
          'ooiui/static/js/compiled/glossary.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            "ooiui/static/lib/underscore/underscore.js",
            "ooiui/static/lib/backbone/backbone.js",
            "ooiui/static/lib/leaflet/dist/leaflet.js",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js",
            "ooiui/static/lib/leaflet.markercluster/dist/leaflet.markercluster.js",
            "ooiui/static/lib/metis-menu/dist/metisMenu.js",
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/backlunr/backlunr.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',

            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/science/InstrumentDeploymentModel.js',
            'ooiui/static/js/models/science/PlatformDeploymentModel.js',
            'ooiui/static/js/models/science/ArrayModel.js',
            'ooiui/static/js/models/science/StreamModel.js',
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/MapModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/TroubleTicketDropdownModel.js',

            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            "ooiui/static/js/views/common/SimpleTOCView.js",
            "ooiui/static/js/views/common/MapView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js'
          ],
          'ooiui/static/js/compiled/StatusUIIcon.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/loremjs/lorem.js',
            'ooiui/static/lib/moment/moment.js',
            "ooiui/static/js/core/filtrify/js/filtrify.js",
            "ooiui/static/lib/jquery.browser/dist/jquery.browser.min.js",

            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/FakeTableModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            'ooiui/static/js/models/common/OperatorEventTypeModel.js',
            'ooiui/static/js/models/common/StatusUIIconModel.js',
            'ooiui/static/js/models/common/StatusUIAccordionModel.js',          
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/StatusUIIconView.js',
            'ooiui/static/js/views/common/StatusUIItemView.js',
            'ooiui/static/js/views/common/StatusUIAccordionView.js',              
            'ooiui/static/js/views/common/StatusUIIconHeaderView.js',
            'ooiui/static/js/views/common/FakeTableView.js',
            'ooiui/static/js/views/common/ChartView.js',
            'ooiui/static/js/views/common/ChartViews.js',
            'ooiui/static/js/views/common/OrgSidebarView.js'
          ],
          //alerts
          'ooiui/static/js/compiled/alertPage.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            "ooiui/static/lib/underscore/underscore.js",
            "ooiui/static/lib/backbone/backbone.js",
            //"ooiui/static/lib/leaflet/dist/leaflet.js",
            //"ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js",
            //"ooiui/static/lib/leaflet.markercluster/dist/leaflet.markercluster.js",
            "ooiui/static/lib/metis-menu/dist/metisMenu.js",
            "ooiui/static/lib/loremjs/lorem.js",
            //'ooiui/static/lib/lunr.js/lunr.js',
            'ooiui/static/lib/backlunr/backlunr.js',
            'ooiui/static/lib/bootstrap-table/dist/bootstrap-table.min.js',
            'ooiui/static/lib/bootstrap-editable-table/bootstrap-editable-table.js',
            'ooiui/static/lib/backbone-validation/dist/backbone-validation.js',
            'ooiui/static/lib/moment/moment.js',
            'ooiui/static/lib/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker.js',
            'ooiui/static/lib/bootstrap-select/dist/js/bootstrap-select.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/science/InstrumentDeploymentModel.js',
            'ooiui/static/js/models/asset_management/PlatformDeploymentModel.js',
            'ooiui/static/js/models/science/ArrayModel.js',
            'ooiui/static/js/models/aa/AlertModel.js',
            'ooiui/static/js/models/aa/TriggeredModel.js',
            'ooiui/static/js/models/science/StreamModel.js',
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/asset_management/AssetModel.js',
            'ooiui/static/js/models/common/MapModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            //'ooiui/static/js/models/common/TroubleTicketDropdownModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            "ooiui/static/js/views/common/TOCView.js",
            "ooiui/static/js/views/aa/AlertView.js",
            "ooiui/static/js/views/aa/TriggeredView.js",
            "ooiui/static/js/views/aa/TriggerAlertDialogView.js",
            //"ooiui/static/js/views/common/MapView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/StatusUIIconView.js',
            'ooiui/static/js/views/common/StatusUIAccordionView.js', 
            'ooiui/static/js/views/common/FakeTableView.js',
            'ooiui/static/js/views/common/ChartView.js',
            'ooiui/static/js/views/common/OrgSidebarView.js'
          ],
          
          'ooiui/static/js/compiled/gridList.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            "ooiui/static/lib/underscore/underscore.js",
            "ooiui/static/lib/backbone/backbone.js",
            "ooiui/static/lib/metis-menu/dist/metisMenu.js",
            "ooiui/static/lib/wellknown/wellknown.js",
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/leaflet/dist/leaflet.js',
            'ooiui/static/lib/bootstrap-table/dist/bootstrap-table.min.js',
            //'ooiui/static/js/core/science/date.js',
            'ooiui/static/lib/bootstrap-editable-table/bootstrap-editable-table.js',
            /*tried this it errored on the page for -sontag
            "ooiui/static/lib/backgrid/lib/backgrid.js",
            "ooiui/static/lib/backbone-pageable/lib/backbone-pageable.min.js",
            "ooiui/static/js/core/backgrid/backgrid-paginator.min.js",
            "ooiui/static/js/core/backgrid/backgrid-select-all.min.js",
            "ooiui/static/js/core/backgrid/backgrid-filter.min.js",*/
            "ooiui/static/js/core/filtrify/js/filtrify.js",
            "ooiui/static/lib/jquery.browser/dist/jquery.browser.min.js",
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/asset_management/AssetModel.js',
            'ooiui/static/js/models/asset_management/EventModel.js',
            'ooiui/static/js/models/asset_management/EventModel.js',
            'ooiui/static/js/models/asset_management/PlatformDeploymentModel.js',
            'ooiui/static/js/models/science/ArrayModel.js',
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            "ooiui/static/js/views/common/SimpleTOCView.js",
            "ooiui/static/js/views/common/MapView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/asset_management/PlatformView.js',
            'ooiui/static/js/views/asset_management/EventsView.js',
            'ooiui/static/js/views/asset_management/EventViewPage.js',
            'ooiui/static/js/views/asset_management/AssetView.js'
          ],
          'ooiui/static/js/compiled/opLog.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/loremjs/lorem.js',
            'ooiui/static/lib/moment/moment.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/FakeTableModel.js',
            'ooiui/static/js/models/common/WatchModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            'ooiui/static/js/models/common/EventModel.js',
            'ooiui/static/js/models/common/OperatorEventTypeModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/FakeTableView.js',
            'ooiui/static/js/views/common/ChartView.js',
            'ooiui/static/js/views/common/ChartViews.js',
            'ooiui/static/js/views/common/WatchView.js',
            'ooiui/static/js/views/common/OrgSidebarView.js',
            'ooiui/static/js/views/common/EventListView.js',
            'ooiui/static/js/views/common/TimeLineEventView.js',
            'ooiui/static/js/views/common/NewEventView.js',
            'ooiui/static/js/views/common/EventView.js'
          ],
          'ooiui/static/js/compiled/streams.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            "ooiui/static/lib/loremjs/lorem.js",
            'ooiui/static/lib/moment/moment.js',
            'ooiui/static/lib/bootstrap3-datetimepicker/src/js/bootstrap-datetimepicker.js',
            'ooiui/static/lib/bootstrap-select/dist/js/bootstrap-select.js',
            'ooiui/static/lib/backbone.stickit/backbone.stickit.js',
            //'ooiui/static/lib/lunr.js/lunr.js',
            'ooiui/static/lib/backlunr/backlunr.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            'ooiui/static/js/models/common/AnnotationModel.js',
            'ooiui/static/js/models/science/StreamModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/TermsDialogView.js',
            'ooiui/static/js/views/common/ModalFormView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/WatchView.js',
            'ooiui/static/js/views/common/SVGView.js',
            'ooiui/static/js/views/common/AnnotationModalFormView.js',
            'ooiui/static/js/views/science/AnnotationTableView.js',
            'ooiui/static/js/views/science/StreamTableView.js',
            'ooiui/static/js/views/science/StreamDownloadFormView.js'
          ],
          'ooiui/static/js/compiled/landingPages.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            'ooiui/static/lib/underscore/underscore.js',
            'ooiui/static/lib/backbone/backbone.js',
            'ooiui/static/lib/loremjs/lorem.js',
            'ooiui/static/lib/moment/moment.js',
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/FakeTableModel.js',
            'ooiui/static/js/models/common/WatchModel.js',
            'ooiui/static/js/models/common/OrganizationModel.js',
            'ooiui/static/js/models/common/EventModel.js',
            'ooiui/static/js/models/common/OperatorEventTypeModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            'ooiui/static/js/views/common/NavbarView.js',
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/common/PanelView.js',
            'ooiui/static/js/views/common/FakeTableView.js',
            'ooiui/static/js/views/common/ChartView.js',
            'ooiui/static/js/views/common/ChartViews.js',
            'ooiui/static/js/views/common/LandingPagesTOCView.js',
            'ooiui/static/js/views/common/EnduranceArrayView.js',
            'ooiui/static/js/views/common/EnduranceLocationSamplingView.js',
            'ooiui/static/js/views/common/EnduranceDescriptionInfrastructureArrayView.js',
            'ooiui/static/js/views/common/EnduranceStationSummaryView.js',
            'ooiui/static/js/views/common/EnduranceDeploymentScheduleView.js',
            'ooiui/static/js/views/common/EnduranceInfrastructureTablesView.js',
            'ooiui/static/js/views/common/EnduranceTechnicalDrawingsView.js',
            'ooiui/static/js/views/common/CabledArrayView.js',
            'ooiui/static/js/views/common/CabledArrayLocationSamplingView.js',
            'ooiui/static/js/views/common/CabledArrayPrimaryInfrastructureView.js',
            'ooiui/static/js/views/common/CabledArraySecondaryInfrastructureView.js',
            'ooiui/static/js/views/common/CabledArrayStationSummaryView.js',
            'ooiui/static/js/views/common/CabledArrayDeploymentSchedualView.js',
            'ooiui/static/js/views/common/CabledArrayDetailedInfrastructureTablesView.js',
            'ooiui/static/js/views/common/CabledArrayTechnicalDrawingsView.js',
            'ooiui/static/js/views/common/StationPapaView.js',
            'ooiui/static/js/views/common/StationPapaTechnicalDrawingView.js',
            'ooiui/static/js/views/common/StationPapaStationSummaryView.js',
            'ooiui/static/js/views/common/StationPapaLocationSamplingView.js',
            'ooiui/static/js/views/common/StationPapaDetailedInfrastructureTablesView.js',
            'ooiui/static/js/views/common/StationPapaDescriptionInfrastructureView.js',
            'ooiui/static/js/views/common/StationPapaDeploymentView.js',
            'ooiui/static/js/views/common/IrmingerSeaView.js',
            'ooiui/static/js/views/common/IrmingerSeaLocationSamplingView.js',
            'ooiui/static/js/views/common/IrmingerSeaDescriptionInfrastructureView.js',
            'ooiui/static/js/views/common/IrmingerSeaStationSummaryView.js',
            'ooiui/static/js/views/common/IrmingerSeaDeploymentView.js',
            'ooiui/static/js/views/common/IrmingerSeaDetailedInfrastructureView.js',
            'ooiui/static/js/views/common/IrmingerSeaTechnicalDrawingsView.js',
            'ooiui/static/js/views/common/ArgentineBasinView.js',
            'ooiui/static/js/views/common/ArgentineBasinTechnicalDrawingView.js',
            'ooiui/static/js/views/common/ArgentineBasinStationSummaryView.js',
            'ooiui/static/js/views/common/ArgentineBasinLocationSamplingView.js',
            'ooiui/static/js/views/common/ArgentineBasinDetailedInfrastructureTablesView.js',
            'ooiui/static/js/views/common/ArgentineBasinDescriptionInfrastructureView.js',
            'ooiui/static/js/views/common/ArgentineBasinDeploymentView.js',
            'ooiui/static/js/views/common/SouthernOceanView.js',
            'ooiui/static/js/views/common/SouthernOceanTechnicalDrawingView.js',
            'ooiui/static/js/views/common/SouthernOceanStationSummaryView.js',
            'ooiui/static/js/views/common/SouthernOceanLocationSamplingView.js',
            'ooiui/static/js/views/common/SouthernOceanDetailedInfrastructureTablesView.js',
            'ooiui/static/js/views/common/SouthernOceanDescriptionInfrastructureView.js',
            'ooiui/static/js/views/common/SouthernOceanDeploymentView.js',
            'ooiui/static/js/views/common/PioneerLocationSamplingView.js',
            'ooiui/static/js/views/common/PioneerArrayView.js',
            'ooiui/static/js/views/common/PioneerInfrastructureArrayView.js',
            'ooiui/static/js/views/common/PioneerStationSummaryArrayView.js',
            'ooiui/static/js/views/common/PioneerDeploymentScheduleView.js',
            'ooiui/static/js/views/common/PioneerInfrastructureTablesView.js',
            'ooiui/statis/js/views/common/PioneerTechnicalDrawingsView.js'
          ],
          'ooiui/static/js/compiled/c2.js' : [
            // Libs
            'ooiui/static/lib/jquery-cookie/jquery.cookie.js',
            "ooiui/static/lib/underscore/underscore.js",
            "ooiui/static/lib/backbone/backbone.js",
            "ooiui/static/lib/metis-menu/dist/metisMenu.js",
            "ooiui/static/lib/loremjs/lorem.js",
            "ooiui/static/lib/jqtree/tree.jquery.js",
            // App
            'ooiui/static/js/ooi.js',
            // Models
            'ooiui/static/js/models/c2/InstrumentsModel.js',
            'ooiui/static/js/models/c2/PlatformStatusModel.js',
            'ooiui/static/js/models/c2/ArrayNavModel.js',
            'ooiui/static/js/models/science/ArrayModel.js',
            'ooiui/static/js/models/common/MessageModel.js',
            'ooiui/static/js/models/common/LoginModel.js',
            'ooiui/static/js/models/common/UserModel.js',
            // Views
            'ooiui/static/js/views/common/DropdownMessagesView.js',
            'ooiui/static/js/views/common/DropdownUserView.js',
            "ooiui/static/js/views/common/NavbarView.js",
            'ooiui/static/js/views/common/LoginView.js',
            'ooiui/static/js/views/common/ModalDialogView.js',
            'ooiui/static/js/views/c2/ArraySideBarView.js',
            'ooiui/static/js/views/c2/ArrayPlatformsView.js',
            'ooiui/static/js/views/c2/ArrayHistoryView.js',
            'ooiui/static/js/views/c2/PlatformPortsView.js',
            'ooiui/static/js/views/c2/PlatformInstrumentsView.js',
            'ooiui/static/js/views/c2/PlatformHistoryView.js',
            'ooiui/static/js/views/c2/InstrumentView.js',
            'ooiui/static/js/views/c2/InstrumentPortsView.js',
            'ooiui/static/js/views/c2/InstrumentHistoryView.js',
            'ooiui/static/js/views/c2/MissionDialogView.js',
            'ooiui/static/js/views/c2/CommandDialogView.js'
          ]
        }
      },
      css: {
        files: {
          "ooiui/static/css/compiled/science.css" : [
            "ooiui/static/lib/leaflet/dist/leaflet.css",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css",
            "ooiui/static/css/common/index.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.css" ,
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.Default.css" ,
            "ooiui/static/lib/bootstrap3-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
            "ooiui/static/css/common/plot.css",
            "ooiui/static/lib/fancytree/dist/skin-bootstrap/ui.fancytree.css" ,
            "ooiui/static/css/common/toc_menu.css"
          ],
          "ooiui/static/css/compiled/loginDemo.css" : [
            "ooiui/static/lib/bootstrap3-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
            "ooiui/static/css/common/loginDemo.css"
          ],
          "ooiui/static/css/compiled/index.css" : [
            "ooiui/static/lib/leaflet/dist/leaflet.css",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.Default.css",
            "ooiui/static/css/common/scienceLayout.css",
            'ooiui/static/lib/bootstrap-table/dist/bootstrap-table.min.css',
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/lib/jquery-ui/themes/smoothness/jquery-ui.css",
            "ooiui/static/lib/bootstrap-select/dist/css/bootstrap-select.css",
            "ooiui/static/css/common/backgridall.min.css",
            "ooiui/static/css/filtrify/css/filtrify.css",
            'ooiui/static/lib/bootstrap-editable-table/bootstrap-editable-table.css'
          ],
          "ooiui/static/css/compiled/signup.css" : [
            "ooiui/static/css/common/userSignUpForm.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css"
          ],
          "ooiui/static/css/compiled/troubleTicket.css" : [
            "ooiui/static/css/common/troubleTicket.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css"
          ],
          "ooiui/static/css/compiled/userEdit.css" : [
            "ooiui/static/css/common/userSignUpForm.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css"
          ],
          "ooiui/static/css/compiled/users.css" : [
            "ooiui/static/css/common/userSignUpForm.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css"
          ],
          "ooiui/static/css/compiled/basic.css" : [
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/ne=wEvent.css"
          ],
          "ooiui/static/css/compiled/svgplot.css" : [
            "ooiui/static/css/common/AnnotationTableView.css",
            "ooiui/static/lib/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css",
            "ooiui/static/lib/bootstrap-select/dist/css/bootstrap-select.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/newEvent.css",
            "ooiui/static/css/common/ModalForm.css"
          ],
          "ooiui/static/css/compiled/FAQ.css" : [
            "ooiui/static/lib/leaflet/dist/leaflet.css",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.Default.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/lib/jquery-ui/themes/smoothness/jquery-ui.css",
            "ooiui/static/lib/bootstrap-select/dist/css/bootstrap-select.css"
          ],
          "ooiui/static/css/compiled/glossary.css" : [
            "ooiui/static/lib/leaflet/dist/leaflet.css",
            "ooiui/static/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.css",
            "ooiui/static/lib/leaflet.markercluster/dist/MarkerCluster.Default.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/lib/jquery-ui/themes/smoothness/jquery-ui.css",
            "ooiui/static/lib/bootstrap-select/dist/css/bootstrap-select.css"
          ],
          
          "ooiui/static/css/compiled/plotsDemo.css" : [
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/annotationModal.css",
            "ooiui/static/css/common/loginDemo.css"
          ],
          "ooiui/static/css/compiled/opLog.css" : [
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/opLog.css",
            "ooiui/static/css/common/timeline.css",
            "ooiui/static/css/common/orgsidebarview.css",
            "ooiui/static/lib/bootstrap3-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
            "ooiui/static/css/common/newEvent.css",
            "ooiui/static/css/common/watch.css"
          ],
          "ooiui/static/css/compiled/streams.css" : [
            "ooiui/static/css/common/AnnotationTableView.css",
            "ooiui/static/lib/bootstrap-select/dist/css/bootstrap-select.css",
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/newEvent.css",
            "ooiui/static/css/common/ModalForm.css"
          ],
          "ooiui/static/css/compiled/landingPages.css" : [
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/lib/bootstrap3-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/timeline.css",
            "ooiui/static/css/common/orgsidebarview.css",
            "ooiui/static/css/common/landingPages.css"
          ],
          "ooiui/static/css/compiled/statusUIIcon.css" : [
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/statusUIIcon.css",
            "ooiui/static/css/common/orgsidebarview.css",
            "ooiui/static/lib/bootstrap3-datetimepicker/build/css/bootstrap-datetimepicker.min.css"
          ],          
          "ooiui/static/css/compiled/c2.css" : [
            "ooiui/static/css/common/scienceLayout.css",
            "ooiui/static/lib/metis-menu/dist/metisMenu.css",
            "ooiui/static/css/common/annotationModal.css",
            "ooiui/static/css/common/loginDemo.css",
            "ooiui/static/css/common/c2.css",
            "ooiui/static/lib/jqtree/jqtree.css"
          ]
        }
      }
    },
    watch: {
      partials: {
        files: ['**/partials/*.html'],
        tasks: ['jst'],
        options: {
        }
      },
      scripts: {
        files: ['**/views/*/*.js', '**/models/*/*.js', '**/ooi.js', '**/common/*.css'],
        tasks: ['concat'],
        options: {
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jst', 'concat']);
  // Empty Commnet
};
