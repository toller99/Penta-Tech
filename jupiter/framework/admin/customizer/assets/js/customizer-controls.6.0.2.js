function mkShowControlIfhasValues(setting,expectedValues){return function(control){var isDisplayed=function(){return-1!==jQuery.inArray(setting.get(),expectedValues)},setActiveState=function(){control.active.set(isDisplayed())};control.active.validate=isDisplayed,setActiveState(),setting.bind(setActiveState)}}