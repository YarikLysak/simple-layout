(function () {
    function removeClasses(elements, classNames) {
        for (var i = 0; i < elements.length; i++) {
            for (var k = 0; k < classNames.length; k++) {
                elements[i].classList.remove(classNames[k]);
            }
        }
    }

    var onDomLoad = function () {
        var withSorting = document.getElementsByClassName("with-sorting");
        var sortOrderDesc = "desc";
        var sortOrderAsc = "asc";

        var handleSortClick = function () {
            var searchClassNames = this.className.split(' ');
            if (searchClassNames.indexOf(sortOrderDesc) !== -1) {
                removeClasses(withSorting, [sortOrderDesc, sortOrderAsc]);
                this.classList.add(sortOrderAsc);
            } else {
                removeClasses(withSorting, [sortOrderDesc, sortOrderAsc]);
                this.classList.add(sortOrderDesc);
            }
        };
        for (var i = 0; i < withSorting.length; i++) {
            withSorting[i].addEventListener("click", handleSortClick)
        }
    };
    document.addEventListener("DOMContentLoaded", onDomLoad)
})();
