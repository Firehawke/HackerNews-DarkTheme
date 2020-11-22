// ==UserScript==
// @name              Hacker News - Dark Theme FH
// @namespace         https://github.com/firehawke
// @description       Another dark theme for Hacker News, FH Edition
// @include           https://news.ycombinator.com*
// @require           https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant             none
// @version           1.0
// ==/UserScript==

var loadScript = function (src, callback) {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.onload = callback;
  elem.src = src;
  document.body.appendChild(elem);
};

function start() {
  var locationIs = function (regex) {
    return window.location.href.match(regex);
  };

  var config = {
    textAreaBg: '#101010',
    textAreaColor: '#FFEC00',
    textAreaLeftBorder: '12px solid #CCCCCC',
    inputColor: 'black',
    inputHoverOnBg: '#CCCCCC',
    inputHoverOffBg: '#DFDFDF',
    fontColor: '#CCCCCC',
    linkColor: '#AAAA00',
    linkVisitedColor: '#AA00AA',
    comheadDefaultColor: '#828282',
    comheadLinksColor: '#00A4FF',
    topBarText: '&nbsp;',
    topBarColor: '#2B2B2B',
    topBarLinkColor: '#FF6300',
    bodyBg: '#2B2B2B',
    centreBg: '#1A1A1A',
    commonBorderSpacing: '1px solid #1A1A1A',
    topDivider: '#00FF00',
    storyTitle: '#FFFF00',
  };

  // Avoid name collisions
  var myJQuery = jQuery;
  jQuery.noConflict(true);

  // Common

  //// Background colors
  myJQuery('body').css('background-color', config.bodyBg);
  myJQuery('table').css('background-color', config.centreBg);

  myJQuery('input').css('background-color', config.inputHoverOffBg);
  myJQuery('input').hover(function () {
    myJQuery(this).css('background-color', config.inputHoverOnBg);
  }, function () {
    myJQuery(this).css('background-color', config.inputHoverOffBg);
  });

  //// Text colors
  myJQuery('body').css('color', config.fontColor);
  myJQuery('table, tr, td').children().css('color', config.topDivider);
  myJQuery('font').css('color', config.fontColor);
  myJQuery('a:link').css('color', config.fontColor);

  //// Comments
  myJQuery('.c00').css('color', config.fontColor);
  myJQuery('.c00 a:link').css('color', config.linkColor);

  myJQuery('.comhead, .subtext').css('color', config.comheadDefaultColor);
  myJQuery('.subtext > a').css('color', config.comheadLinksColor);

  myJQuery('input').css('color', config.inputColor);
  myJQuery('.pagetop:eq(1)').children().css('color', 'yellow'); // Login button

  myJQuery('.storylink').css('color', config.storyTitle);

  //// Spacing
  myJQuery('td').css('border', config.commonBorderSpacing);

  if (locationIs(/.*ycombinator\.com\/rss.*/)) {
    // RSS -- No theme
  } else if (locationIs(/.*ycombinator\.com\/dmca.*/)) {
    // DMCA

  } else if (locationIs(/.*ycombinator\.com\/.*login.*/)) {
    // Login

  } else if (locationIs(/.*ycombinator\.com\/submit.*/)) {
    // Submit

  } else if (locationIs(/.*ycombinator\.com\/item.*/)) {
    // Discussions

    //// Background colors
    myJQuery('textarea').css('background-color', config.textAreaBg);
    myJQuery('textarea').css('color', config.textAreaColor);
    myJQuery('textarea').css('border-left', config.textAreaLeftBorder);

    //// Text Colors
    myJQuery('.comhead > a').css('color', config.comheadLinksColor);
    myJQuery('.pagetop a:link').css('color', config.topBarLinkColor);

    //// Bar at top
    myJQuery('tr:eq(0)').next().html(config.topBarText);
    myJQuery('tr:eq(0)').next().css('background-color', config.topBarColor);
  }  else {
    //// Bar at top
    myJQuery('tr:eq(0)').next().html(config.topBarText);
    myJQuery('tr:eq(0)').next().css('background-color', config.topBarColor);
  }

  //// Footer
  myJQuery('.pagetop:eq(0)').append(' | <a href="https://github.com/Firehawke/HackerNews-DarkTheme" style="color: cyan;">theme</a>');
}

start();
