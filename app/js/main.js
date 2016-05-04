// $(document).ready(function() {
//
//   //defining our global variables
//     var $menu     = $('#menu'), //the entire navigation
//         $menulink = $('.nav-trigger'); // the small navigation trigger
//
//     // small nav menu click event
//     $menulink.click(function(e) {
//         // add active classes to small navigation trigger and entire navigation
//         $menulink.toggleClass('active');
//         $menu.toggleClass('active');
//
//       // conditional check for directional icon
//       if($menulink.hasClass('active')) {
//         // if class is active give an up arrow
//       	$('.directional').html('&uparrow;');
//       }else {
//         // ...otherwise show me a down arrrow alex
//       	$('.directional').html('&downarrow;');
//       }
//
//       // don't return nothin'...k?
// 			return false;
//
//       // prevent the defualt behaviour of the element...k?
//       e.preventDefault();
// 		});
//
//   	// matched media detection for aria-hidden attribute manipulation
//   	// this only changes based on the intitial page load query matched
//   	//window.innerWidth might be a better way at the moment and does not require a refresh like our friend matchMedia desires.
//
//   	if(window.matchMedia("(min-width: 60em)").matches){
//   		$menulink.attr('aria-hidden', 'false');
//   	}else {
//   		$menulink.attr('aria-hidden', 'true');
//   	}
//
// });
