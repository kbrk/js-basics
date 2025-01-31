/**
 * Event Delegation allows a single event handler attached to a parent to occur on the parent's all-defined children instead of attaching individual event listeners for every element. It helps to reduce memory usage and improve page loading performance.
 */

const div = document.getElementById('buttonDiv');
div.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        console.log('A button was clicked.');
    }
});