import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import App from './App.js'
import $ from 'jquery'
ReactDOM.render(<App />, $('#root')[0]);

window.onload = () => {
	$(window).scroll(function() {
    	$(".animation").each(function(){
      	var pos = $(this).offset().top
      	var winTop = $(window).scrollTop()
        console.log(pos, winTop)
        if (pos < winTop + 600) {
        	let classToAdd = null
        	if($(this).attr('class').indexOf('right') >= 0) {
        		classToAdd = 'slide-from-right'
        	}
        	else if($(this).attr('class').indexOf('left') >= 0) {
        		classToAdd = 'slide-form-left'
        	}
        	else {
        		classToAdd = 'slide-from-bottom'
        	}

        	$(this).addClass(classToAdd)
        }
    });
  });
}