var PrimeFlex = {

    init: function () {
        this.documentation = document.getElementById('doc');
        this.menuWrapper = document.getElementById('layout-menu-wrapper');
        this.menu = document.getElementById('layout-menu');
        this.mask = document.getElementById('layout-mask');
        this.mobileMenuButton = document.getElementById('mobile-button');
        this.schemeButton = document.getElementById('scheme-button');

        this.searchMask = document.getElementById('search-mask');
        this.searchContainer = document.getElementById('search-container');
        this.searchInput = document.getElementById('search-input');
        this.searchInputTopbar = document.getElementById('search-topbar');
        this.resultList = document.getElementById('results-container');

        this.mobileSearchButton = document.getElementById('mobile-search-button')

        this.bindEvents();

        var scrollPos = window.sessionStorage.getItem('scroll-pos');
        if (scrollPos) {
            this.menu.scrollTop = parseInt(scrollPos);
        }

        var colorSchemeUrl = window.localStorage.getItem('color-scheme-url');
        if(colorSchemeUrl) {
            const element = document.getElementById('layout-css');
            this.replaceLink(element, colorSchemeUrl);
            this.changeLogos();
        }
    },

    bindEvents: function () {
        var $this = this;

        window.addEventListener('click', function(e){
            if(!($this.menuWrapper.contains(e.target) || $this.mobileMenuButton.contains(e.target))) { //menu outside click
                if ($this.hasClass($this.menuWrapper, 'active')) {
                    $this.removeClass($this.menuWrapper, 'active');
                    $this.removeClass($this.mask, 'layout-mask-active');
                }
            }

            if(!($this.searchInputTopbar.contains(e.target) || $this.searchContainer.contains(e.target) || $this.mobileSearchButton.contains(e.target))) { //search dialog outside click
                if ($this.hasClass($this.searchMask, 'active-mask')) {
                    $this.removeClass($this.searchMask, 'active-mask');
                    $this.unblockBodyScroll();
                    $this.searchInput.value = "";
                }
            }
        });

        window.addEventListener('keydown', function (e){
            if((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) { //search dialog open
                if (!$this.hasClass($this.searchMask, 'active-mask')) {
                    $this.addClass($this.searchMask, 'active-mask');
                    $this.blockBodyScroll();
                    $this.searchInput.focus();
                    e.preventDefault();
                }
            }
            if(e.key === 'Escape') {
                if ($this.hasClass($this.searchMask, 'active-mask')) { //search dialog close
                    $this.removeClass($this.searchMask, 'active-mask');
                    $this.unblockBodyScroll();
                    $this.searchInput.value = "";
                }
            }

            var previousElement = document.activeElement.parentElement.previousElementSibling;
            var nextElement = document.activeElement.parentElement.nextElementSibling;
            if($this.resultList && $this.resultList.childNodes.length > 0) {    //search result navigation
                if(e.key === 'ArrowDown' && nextElement) {
                    nextElement.firstElementChild.focus();
                }
                if(e.key === 'ArrowUp' && previousElement) {
                    previousElement.firstElementChild.focus();
                }
                if(e.key === 'ArrowRight' && nextElement) {
                    nextElement.firstElementChild.focus();
                }
                if(e.key === 'ArrowLeft' && previousElement) {
                    previousElement.firstElementChild.focus();
                }
            }
        });
        
        this.menuWrapper.addEventListener('click', function() {
            window.sessionStorage.setItem('scroll-pos', $this.menu.scrollTop);
        });
    },

    onSearchClick: function (e) {
        if (this.hasClass(this.searchMask, 'active-mask')) {
            this.removeClass(this.searchMask, 'active-mask');
            this.unblockBodyScroll();
        } else {
            this.addClass(this.searchMask, 'active-mask');
            this.blockBodyScroll();
            this.searchInput.focus();
        }
    },

    blockBodyScroll: function () {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    },

    unblockBodyScroll: function() {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },

    onKeyup: function (e) {
        if(this.resultList && this.resultList.childNodes.length > 0)
        {
            if(e.key === 'ArrowDown' && this.resultList.firstElementChild.firstElementChild) {
                this.resultList.firstElementChild.firstElementChild.focus();
            }

            this.searchInput.style.borderBottomLeftRadius = '0';
            this.searchInput.style.borderBottomRightRadius = '0';
        }
        else {
            this.searchInput.style.borderBottomLeftRadius = '10px';
            this.searchInput.style.borderBottomRightRadius = '10px';
        }
    },

    onToggleMobileMenu: function (e) {
        if (this.hasClass(this.menuWrapper, 'active')) {
            this.removeClass(this.menuWrapper, 'active');
            this.removeClass(this.mask, 'layout-mask-active');
        } else {
            this.addClass(this.menuWrapper, 'active');
            this.addClass(this.mask, 'layout-mask-active');
        }
    },

    onToggleColorScheme: function (e) {
        const element = document.getElementById('layout-css');
        const urlTokens = element.getAttribute('href').split('/');

        const isLight = this.hasClass(e.currentTarget.firstElementChild, 'pi-moon');

        if (isLight) {
            urlTokens[urlTokens.length - 1] = 'primeflex-arya.css';
            this.addClass(document.body, 'layout-wrapper-dark');
            this.removeClass(document.body, 'layout-wrapper-light');
        }
        else {
            urlTokens[urlTokens.length - 1] = 'primeflex-saga.css';
            this.addClass(document.body, 'layout-wrapper-light');
            this.removeClass(document.body, 'layout-wrapper-dark');
        }

        const newURL = urlTokens.join('/');

        window.localStorage.setItem('color-scheme-url', newURL);
        this.replaceLink(element, newURL);

        this.changeLogos();

    },

    changeLogos: function () {
        const topbarLogoLink = document.getElementById('topbar-logo');
        const mobileLogoLink = document.getElementById('mobile-logo');
        const footerLogoLink = document.getElementById('footer-logo');

        var colorSchemeUrl = window.localStorage.getItem('color-scheme-url');

        if(colorSchemeUrl.endsWith('assets/css/primeflex-arya.css')) {
            topbarLogoLink.src = "assets/images/primeflex-logo-white.svg";
            mobileLogoLink.src = "assets/images/logo-text-light.svg";
            footerLogoLink.src = "assets/images/prime-logo-white.svg";
            this.removeClass(this.schemeButton.childNodes[1], 'pi-moon');
            this.addClass(this.schemeButton.childNodes[1], 'pi-sun');
        }
        else {
            topbarLogoLink.src = "assets/images/primeflex-logo-dark.svg";
            mobileLogoLink.src = "assets/images/logo-text-dark.svg";
            footerLogoLink.src = "assets/images/prime-logo-dark.svg";
            this.removeClass(this.schemeButton.childNodes[1], 'pi-sun');
            this.addClass(this.schemeButton.childNodes[1], 'pi-moon');
        }
    },

    replaceLink: function (linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    },

    isIE: function () {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    },

    copyText: function (e) {
        var copyText = e.currentTarget.previousElementSibling;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');

        copyText.style.visibility = 'hidden';
        copyText.previousElementSibling.style.display = 'block';
    },

    refreshCodeHighlight: function () {
        var codes = this.documentation.querySelectorAll('code');
        for (var i = 0; i < codes.length; i++) {
            Prism.highlightElement(codes[i]);
        }
    },

    removeActiveClass: function () {
        this.removeClass(this.menuWrapper.querySelector('.active'), 'active');
    },

    hasClass: function (element, className) {
        if (element) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    },

    addClass: function (element, className) {
        if (element) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        }
    },

    removeClass: function (element, className) {
        if (element) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}

PrimeFlex.init();

