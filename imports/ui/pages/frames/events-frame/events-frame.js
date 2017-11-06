import { Template } from 'meteor/templating';

import './events-frame.html';

Template.frameEvents.onRendered(function() {
	var instance = this;
	this.autorun(function() {
		instance.$("a").attr("target", "_blank");
	});
});
