

'use strict';

let elements = document.querySelectorAll('handleClick');
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener('click', function () {
          console.log('item: ' + i);
        })
      }

