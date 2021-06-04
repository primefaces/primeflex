var PrimeFlex = {

    init: function() {
        this.menu = document.getElementById('layout-menu-wrapper');
        this.mask = document.getElementById('layout-mask');
        this.documentation = document.getElementById('doc');

        this.bindEvents();
    },

    bindEvents: function () {
        var $this = this;
    },

    onToggleMobileTopbarMenu: function(e) {
        var menubutton = e.currentTarget;
        var menu = menubutton.nextElementSibling;

        if (this.hasClass(menu, 'active')) {
            this.removeClass(menu, 'active');
        }
        else {
            this.addClass(menu, 'active');
        }
    },

    onToggleMobileMenu: function(e) {
        var menubutton = e.currentTarget;

        if (this.hasClass(this.menu, 'active')) {
            this.removeClass(this.menu, 'active');
            this.removeClass(this.mask, 'layout-mask-active');
        }
        else {
            this.addClass(this.menu, 'active');
            this.addClass(this.mask, 'layout-mask-active');
        }
    },

    copyText: function(e) {
        var copyText = e.currentTarget.previousElementSibling;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');

        copyText.style.visibility = 'hidden';
        copyText.previousElementSibling.style.display = 'block';
    },

    refreshCodeHighlight: function() {
        var codes = this.documentation.querySelectorAll('code');
        for (var i = 0; i < codes.length; i++) {
            Prism.highlightElement(codes[i]);
        }  
    },

    removeActiveClass: function() {
        this.removeClass(this.menu.querySelector('.active'), 'active');
    },

    hasClass: function(element, className) {
        if (element) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    },

    addClass: function(element, className) {
        if (element) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        }
    },

    removeClass: function(element, className) {
        if (element) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}

PrimeFlex.init();

/* Hero Text Animation
var Animation = {

    init: function() {
        this.words = document.getElementsByClassName('word');
		this.wordArray = [];
		this.currentWord = 0;

		this.words[this.currentWord].style.opacity = 1;
		for (var i = 0; i < this.words.length; i++) {
		    this.splitLetters(this.words[i]);
        }
        
        this.run();
    },

    changeWord: function () {
		var cw = this.wordArray[this.currentWord];
		var nw = this.currentWord == this.words.length-1 ? this.wordArray[0] : this.wordArray[this.currentWord+1];
		for (var i = 0; i < cw.length; i++) {
			this.animateLetterOut(cw, i);
		}
		
		for (var i = 0; i < nw.length; i++) {
			nw[i].className = 'letter behind';
			nw[0].parentElement.style.opacity = 1;
			this.animateLetterIn(nw, i);
		}
		
		this.currentWord = (this.currentWord == this.wordArray.length-1) ? 0 : this.currentWord+1;
	},

	animateLetterOut: function(cw, i) {
		setTimeout(function() {
			cw[i].className = 'letter out';
		}, i*80);
	},

	animateLetterIn: function(nw, i) {
		setTimeout(function() {
			nw[i].className = 'letter in';
		}, 340+(i*80));
	},

	splitLetters: function(word) {
		var content = word.innerHTML;
		word.innerHTML = '';
		var letters = [];
		for (var i = 0; i < content.length; i++) {
			var letter = document.createElement('span');
			letter.className = 'letter';
			letter.innerHTML = content.charAt(i);
			word.appendChild(letter);
			letters.push(letter);
		}
		
		this.wordArray.push(letters);
    },
    
    run: function() {
        var $this = this;
        this.changeWord();
		setInterval(function() {
            $this.changeWord();
        }, 4000);
    }
}

Animation.init(); */
