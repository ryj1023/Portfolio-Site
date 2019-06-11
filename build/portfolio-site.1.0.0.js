/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	$(function () {
	  $(".navbar a").on("click", function () {
	    if ($(".navbar-toggler").css("display") != "none") {
	      $(".navbar-toggler").trigger("click");
	    }
	  });
	});
	(function (document, history, location) {
	  var HISTORY_SUPPORT = !!(history && history.pushState);
	
	  var anchorScrolls = {
	    ANCHOR_REGEX: /^#[^ ]+$/,
	    OFFSET_HEIGHT_PX: window.innerWidth > 992 ? 46 : 80,
	
	    /**
	     * Establish events, and fix initial scroll position if a hash is provided.
	     */
	    init: function init() {
	      this.scrollToCurrent();
	      window.addEventListener("hashchange", this.scrollToCurrent.bind(this));
	      document.body.addEventListener("click", this.delegateAnchors.bind(this));
	    },
	
	    /**
	     * Return the offset amount to deduct from the normal scroll position.
	     * Modify as appropriate to allow for dynamic calculations
	     */
	    getFixedOffset: function getFixedOffset() {
	      return this.OFFSET_HEIGHT_PX;
	    },
	
	    /**
	     * If the provided href is an anchor which resolves to an element on the
	     * page, scroll to it.
	     * @param  {String} href
	     * @return {Boolean} - Was the href an anchor.
	     */
	    scrollIfAnchor: function scrollIfAnchor(href, pushToHistory) {
	      var match, rect, anchorOffset;
	
	      if (href === "#") {
	        $("html, body").animate({ scrollTop: 0 }, 500);
	      }
	
	      if (!this.ANCHOR_REGEX.test(href)) {
	        return false;
	      }
	
	      match = document.getElementById(href.slice(1));
	
	      if (match) {
	        rect = match.getBoundingClientRect();
	        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
	        $("html, body").animate({ scrollTop: anchorOffset }, 500);
	        // window.scrollTo(window.pageXOffset, anchorOffset);
	        // Add the state to history as-per normal anchor links
	        if (HISTORY_SUPPORT && pushToHistory) {
	          history.pushState({}, document.title, location.pathname + href);
	        }
	      }
	
	      return !!match;
	    },
	
	    /**
	     * Attempt to scroll to the current location's hash.
	     */
	    scrollToCurrent: function scrollToCurrent() {
	      this.scrollIfAnchor(window.location.hash);
	    },
	
	    /**
	     * If the click event's target was an anchor, fix the scroll position.
	     */
	    delegateAnchors: function delegateAnchors(e) {
	      var elem = e.target;
	
	      if (elem.nodeName === "A" && this.scrollIfAnchor(elem.getAttribute("href"), true)) {
	        e.preventDefault();
	      }
	    }
	  };
	
	  window.addEventListener("DOMContentLoaded", anchorScrolls.init.bind(anchorScrolls));
	})(window.document, window.history, window.location);

/***/ })
/******/ ]);
//# sourceMappingURL=portfolio-site.1.0.0.js.map