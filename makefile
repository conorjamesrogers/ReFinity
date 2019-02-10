.PHONY: browser

browser:
	cordova platform rm browser
	cordova platform add browser
	cordova build browser
