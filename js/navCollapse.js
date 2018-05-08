(function () {
    var onDomLoad = function () {
        var menuBtn = document.getElementById('menu-button'),
            closeMenuBtn = document.getElementById('close-menu_button'),
            navTabContent = document.getElementById('nav-tab_content');

        menuBtn.addEventListener("click", function () {
                navTabContent.classList.add("collapsed-menu");
            }
        );

        closeMenuBtn.addEventListener("click", function () {
                navTabContent.classList.remove("collapsed-menu");
            }
        );
    };
    document.addEventListener("DOMContentLoaded", onDomLoad)
})();
