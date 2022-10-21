	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById('menu-bris').addEventListener('click', function (event) {
			event.preventDefault();
			document.querySelectorAll(".menu a").forEach((element,index) => { element.classList.remove('active'); });
			document.getElementById('menu-bris').classList.add('active');		
			document.querySelectorAll(".vidcard:not(.bris)").forEach((element,index) =>				
				{
					
					element.classList.add('hidden');

				});
			document.querySelectorAll(".vidcard.bris").forEach((element,index) =>				
				{
					
					element.classList.remove('hidden');

				});
			
			
		});
		
		document.getElementById('menu-wc').addEventListener('click', function (event) {
			event.preventDefault();
			document.querySelectorAll(".menu a").forEach((element,index) => { element.classList.remove('active'); });
			document.getElementById('menu-wc').classList.add('active');		
			document.querySelectorAll(".vidcard:not(.wc)").forEach((element,index) =>				
				{
					
					element.classList.add('hidden');

				});
			document.querySelectorAll(".vidcard.wc").forEach((element,index) =>				
				{
					
					element.classList.remove('hidden');

				});
			
			
		});
		
		document.getElementById('menu-all').addEventListener('click', function (event) {
			event.preventDefault();
			document.querySelectorAll(".menu a").forEach((element,index) => { element.classList.remove('active'); });
			document.getElementById('menu-all').classList.add('active');		
			document.querySelectorAll(".vidcard").forEach((element,index) =>				
				{
					
					element.classList.remove('hidden');

				});
			
		});		
	});
