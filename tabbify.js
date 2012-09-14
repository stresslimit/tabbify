
	// makes the tabs and does tab-related things
	$.fn.tabbify = function(callback){

		var tabs = $('.tab', this);
		var panes = $('.pane', this);

		// var tabs = $('.tab',this).not( $('.pane .tab', this) );	// .not() deals with the rare case when a set of tabs are within another (parent) tab's pane
		// var panes = $('.pane',this).not( $('.pane .pane', this) );

		return tabs.each(function(){									// return tabs (not panes, nor parent) for chainability

			$(this).click(function(){
				// if ( $(this).hasClass('active') ) return false; // do nothing if we clicked the already active tab : needs testing
				tabs.removeClass('active');
				panes.hide();
				var activeTab = $('a', this).attr('href');
				$(activeTab).fadeIn();
				$(this).addClass('active');

				if (callback) {
					callback.call(this, activeTab.replace(/#/,'') );	// callback - return active name
				}

				return false;
			});
		});
	}

