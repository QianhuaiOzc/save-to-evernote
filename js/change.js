$(document).ready(function() {
	var el_tpl = $("<div class='evernote_trigger'><a href='#' class='evernote_collect'>添加到Evernote</a></div>");
	el_tpl.insertBefore($("#OSC_Content #toolbar_wrapper div.favorite"));
	// $("#OSC_Content #toolbar_wrapper div.options").append($(tpl));
});