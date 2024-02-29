document.addEventListener('DOMContentLoaded', function() {
  
  // Step 2: Dynamically create and add the CSS styles
  var style = document.createElement('style');
  style.setAttribute('amp-boilerplate', '');
  style.innerHTML = `
  body {
    -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
    -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
    -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
    animation: -amp-start 8s steps(1, end) 0s 1 normal both;
  }
  @-webkit-keyframes -amp-start {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
  @-moz-keyframes -amp-start {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
  @-ms-keyframes -amp-start {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
  @-o-keyframes -amp-start {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
  @keyframes -amp-start {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
  
  amp-story, #amp-story-wrapper{ z-index: 100000000; display: none !important; }
  `;
  document.head.appendChild(style);
  
  // Create the amp-story element
  
  var ampStory = document.createElement('amp-story');
  ampStory.setAttribute('standalone', '');
  ampStory.setAttribute('title', 'My Story');
  ampStory.setAttribute('publisher', 'The AMP Team');
  
  // Function to create an amp-story-page
  function createAmpStoryPage(pageId, imgSrc, imgAlt, pageTitle) {
    var ampStoryPage = document.createElement('amp-story-page');
    ampStoryPage.setAttribute('id', pageId);
  
    // First amp-story-grid-layer with template "fill"
    var ampStoryGridLayerFill = document.createElement('amp-story-grid-layer');
    ampStoryGridLayerFill.setAttribute('template', 'fill');
    var ampImg = document.createElement('amp-img');
    ampImg.setAttribute('src', imgSrc);
    ampImg.setAttribute('width', '900');
    ampImg.setAttribute('height', '1600');
    ampImg.setAttribute('alt', imgAlt);
    ampStoryGridLayerFill.appendChild(ampImg);
  
    // Second amp-story-grid-layer with template "vertical"
    var ampStoryGridLayerVertical = document.createElement('amp-story-grid-layer');
    ampStoryGridLayerVertical.setAttribute('template', 'vertical');
    var h1 = document.createElement('h1');
    h1.textContent = pageTitle;
    ampStoryGridLayerVertical.appendChild(h1);
  
    // Append grid layers to the story page
    ampStoryPage.appendChild(ampStoryGridLayerFill);
    ampStoryPage.appendChild(ampStoryGridLayerVertical);
  
    return ampStoryPage;
  }
  
  // Create and append the first amp-story-page
  var firstPage = createAmpStoryPage(
    'my-first-page',
    'https://picsum.photos/720/320?image=1026',
    '',
    'Hello, amp-story!'
  );
  ampStory.appendChild(firstPage);
  
  // Create and append the second amp-story-page
  var secondPage = createAmpStoryPage(
    'my-second-page',
    'https://picsum.photos/720/320?image=1026',
    '',
    'The End'
  );
  ampStory.appendChild(secondPage);
  
  ampStoryWrapper = document.createElement('div');
  ampStoryWrapper.setAttribute( 'id', 'amp-story-wrapper' );
  //ampStoryWrapper.setAttribute( 'style', 'display:none !important' );
  ampStoryWrapper.appendChild(ampStory);
  
  // Append the amp-story to the document
  document.body.appendChild(ampStoryWrapper);
  
  // Create a new script element
  var script = document.createElement('script');
  
  // Set the type of the script (optional, as it defaults to JavaScript)
  script.type = 'text/javascript';
  
  // Set the source of the script to the URL of the JavaScript file you want to load
  script.src = 'https://cdn.ampproject.org/v0.js';
  
  // Add the async attribute to the script element
  script.async = true;
  
  // Append the script element to the head (or body) of the document
  document.head.appendChild(script);
  
  // Create a new script element
  script = document.createElement('script');
  
  // Set the type of the script (optional, as it defaults to JavaScript)
  script.type = 'text/javascript';
  
  // Set the source of the script to the URL of the JavaScript file you want to load
  script.src = 'https://cdn.ampproject.org/v0/amp-story-1.0.js';
  
  // Add the async attribute to the script element
  script.async = true;
  
  // Add a custom attribute to the script element
  script.setAttribute('custom-element', 'amp-story');
  
  // Append the script element to the head (or body) of the document
  document.head.appendChild(script);
  
  // Set the type of the script (optional, as it defaults to JavaScript)
  script.type = 'text/javascript';
  
  // Set the source of the script to the URL of the JavaScript file you want to load
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js';
  
  // Add the async attribute to the script element
  script.async = true;
  
  // Add a custom attribute to the script element
  script.setAttribute('integrity', 'sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy');
  
  // Add a custom attribute to the script element
  script.setAttribute('crossorigin', 'anonymous');
  
  // Append the script element to the head (or body) of the document
  document.head.appendChild(script);
  
  // Create and style the toggle button
  var toggleButton = document.createElement('button');
  toggleButton.textContent = 'Open Story';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '400px';
  toggleButton.style.right = '20px';
  toggleButton.style.width = '80px';
  toggleButton.style.height = '80px';
  toggleButton.style.borderRadius = '50%';
  toggleButton.style.fontSize = '24px';
  toggleButton.style.textAlign = 'center';
  toggleButton.style.backgroundColor = '#007bff';
  toggleButton.style.color = 'white';
  toggleButton.style.border = 'none';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.zIndex = '10000000000001';
  
  // Add event listener to toggle AMP story visibility
  toggleButton.addEventListener('click', function() {
    var ampStoryWrapper = document.querySelector('#amp-story-wrapper');
    if (ampStoryWrapper.style.display == '' || ampStoryWrapper.style.display === ''  || ampStoryWrapper.style.display == 'none !important' || ampStoryWrapper.style.display === 'none !important'  || ampStory.style.display == 'none' || ampStoryWrapper.style.display === 'none' ) {
      console.log('hehe');
      ampStoryWrapper.setAttribute('style', 'display:block !important');
      this.textContent = 'Close Story'
    } else {
    console.log('haha');
      ampStoryWrapper.setAttribute('style', 'display:none !important');
      this.textContent = 'Open Story'
    }
  });
});

// Append the toggle button to the document
document.body.appendChild(toggleButton);
