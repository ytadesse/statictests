console.log('started story_generator');

  // Create a new script element
  var link_css = document.createElement('link');
  
  // Set the source of the script to the URL of the JavaScript file you want to load
  link_css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

   // Set the source of the script to the URL of the JavaScript file you want to load
  link_css.rel = 'stylesheet';
  
  // Add a custom attribute to the script element
  link_css.setAttribute('integrity', 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH');
  
  // Add a custom attribute to the script element
  link_css.setAttribute('crossorigin', 'anonymous');
  
  // Append the script element to the head (or body) of the document
  document.head.appendChild(link_css);

  // Create a new script element
  script = document.createElement('script');

  // Set the type of the script (optional, as it defaults to JavaScript)
  script.type = 'text/javascript';
  
  // Set the source of the script to the URL of the JavaScript file you want to load
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js';
  
  // Add a custom attribute to the script element
  script.setAttribute('integrity', 'sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy');
  
  // Add a custom attribute to the script element
  script.setAttribute('crossorigin', 'anonymous');
  
  // Append the script element to the head (or body) of the document
  document.head.appendChild(script);

function createModal() {
  console.log('starting createModal');
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');
  modalContainer.id = 'staticBackdrop';
  modalContainer.setAttribute('data-bs-backdrop', 'static');
  modalContainer.setAttribute('data-bs-keyboard', 'false');
  modalContainer.setAttribute('tabindex', '-1');
  modalContainer.setAttribute('aria-labelledby', 'staticBackdropLabel');
  modalContainer.setAttribute('aria-hidden', 'true');

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog');
  modalDialog.classList.add('modal-fullscreen-sm-down');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Modal Header
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');

  const modalTitle = document.createElement('h5');
  modalTitle.classList.add('modal-title', 'fs-5');
  modalTitle.id = 'staticBackdropLabel';
  modalTitle.textContent = 'Modal title';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('btn-close');
  closeButton.setAttribute('data-bs-dismiss', 'modal');
  closeButton.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  // Modal Body with Tabs
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  const nav = document.createElement('nav');
  nav.classList.add('nav', 'nav-tabs');

  const storyModeTab = document.createElement('a');
  storyModeTab.classList.add('nav-link', 'active');
  storyModeTab.href = '#storyMode';
  storyModeTab.setAttribute('aria-selected', 'true');
  storyModeTab.textContent = 'Story Mode';

  const podcastModeTab = document.createElement('a');
  podcastModeTab.classList.add('nav-link');
  podcastModeTab.href = '#podcastMode';
  podcastModeTab.textContent = 'Podcast Mode';

  const readAloudModeTab = document.createElement('a');
  readAloudModeTab.classList.add('nav-link');
  readAloudModeTab.href = '#readAloudMode';
  readAloudModeTab.textContent = 'Read Aloud Mode';

  nav.appendChild(storyModeTab);
  nav.appendChild(podcastModeTab);
  nav.appendChild(readAloudModeTab);

  const tabContent = document.createElement('div');
  tabContent.classList.add('tab-content');

  const storyModeContent = document.createElement('div');
  storyModeContent.classList.add('tab-pane', 'active', 'show');
  storyModeContent.id = 'storyMode';

  // Add your content for Story Mode here (without the carousel)
  
  const podcastModeContent = document.createElement('div');
  podcastModeContent.classList.add('tab-pane');
  podcastModeContent.id = 'podcastMode';
  // Add your content for Podcast Mode here

  const readAloudModeContent = document.createElement('div');
  readAloudModeContent.classList.add('tab-pane');
  readAloudModeContent.id = 'readAloudMode';
  // Add your content for Read Aloud Mode here

  tabContent.appendChild(storyModeContent);
  tabContent.appendChild(podcastModeContent);
  tabContent.appendChild(readAloudModeContent);

  modalBody.appendChild(nav);
  modalBody.appendChild(tabContent);

  // Modal Footer
  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');

  const closeFooterButton = document.createElement('button');
  closeFooterButton.type = 'button';
  closeFooterButton.classList.add('btn', 'btn-secondary');
  closeFooterButton.setAttribute('data-bs-dismiss', 'modal');
  closeFooterButton.textContent = 'Close';

  modalFooter.appendChild(closeFooterButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);
  modalContainer.appendChild(modalDialog);

  // Add the modal to the document body
  document.body.appendChild(modalContainer);

  // Create the modal trigger button
  const modalTriggerButton = document.createElement('button');
  modalTriggerButton.type = 'button';
  modalTriggerButton.classList.add('btn', 'btn-primary');
  modalTriggerButton.setAttribute('data-bs-toggle', 'modal');
  modalTriggerButton.setAttribute('data-bs-target', '#staticBackdrop');
  modalTriggerButton.textContent = 'Launch static backdrop modal';
  
  // Create a style element and set the CSS rule
  const style = document.createElement('style');
  style.textContent = `.fixed-button { position: fixed; bottom: 100px; right: 20px; }`;
  
  // Add the style element to the head
  document.head.appendChild(style);
  
  // Add the button to the body
  modalTriggerButton.classList.add('fixed-button'); // Now add the class after creating the style
  document.body.appendChild(modalTriggerButton);

  // Select the tab links
  const tabLinks = document.querySelectorAll('.nav-link');
  
  // Loop through each tab link
  tabLinks.forEach(link => {
    // Add click event listener
    link.addEventListener('click', function(event) {
      // Prevent default link behavior
      event.preventDefault();
  
      // Remove active class from all tab links and tab panes
      tabLinks.forEach(l => l.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active', 'show'));
  
      // Get the target tab content ID from the clicked link's href
      const targetId = this.getAttribute('href');
  
      // Get the target tab content element
      const targetPane = document.getElementById(targetId.slice(1)); // Remove the # prefix
  
      // Add active class to the clicked tab link and its corresponding tab content
      this.classList.add('active');
      targetPane.classList.add('active', 'show');
    });
  });

    console.log('finished createModal');
}

createModal();
console.log('finished story_generator');
