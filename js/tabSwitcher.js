(function () {
    var onDomLoad = function () {
        var activeClassName = "active";
        var attrName = "data-tab";
        var tabButtons = document.getElementsByClassName("tab__button");
        var tabContent = document.getElementsByClassName("tab__content");
        var clickedTabName;
        var showSelectedContent = function (clickedTabName) {
            for (var i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove(activeClassName);
                if (tabContent[i].getAttribute(attrName) == clickedTabName) {
                    tabContent[i].classList.add(activeClassName);
                }
            }
        };
        var focusClickedButton = function (clickedButton) {
            for (var i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove(activeClassName);
                clickedButton.classList.add(activeClassName);
            }
        };
        var handleTabClick = function () {
            clickedTabName = this.getAttribute(attrName);
            showSelectedContent(clickedTabName);
            focusClickedButton(this);
        };
        var addClickListener = function() {
            for (var i = 0; i < tabButtons.length; i++) {
                tabButtons[i].addEventListener("click", handleTabClick);
            }
        };

        addClickListener();
    };

    document.addEventListener("DOMContentLoaded", onDomLoad);
})();
