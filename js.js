	document.addEventListener("DOMContentLoaded", function() {

		function menuToggle(menuId, showClass, pageTitle) {
			// toggle 'active' highlight of menus
			document.querySelectorAll('.menu a').forEach((element,index) => { element.classList.remove('active'); });
			document.getElementById(menuId).classList.add('active');
			// toggle actual display of videos	
			document.querySelectorAll(".vidcard:not(" + showClass + ")").forEach((element,index) => { element.classList.add('hidden'); });
			document.querySelectorAll(".vidcard" + showClass).forEach((element,index) => { element.classList.remove('hidden'); });
			// update page title
			document.getElementById('indextitle').textContent = pageTitle + ' videos';
		}
		
		function createMenuClickHandler(menuId, showClass, pageTitle) {
			document.getElementById(menuId).addEventListener('click', function (event) {
				event.preventDefault();
				menuToggle(menuId, showClass, pageTitle);
			});
		}
	
		function createMenuElement(target, key, words, showClass) {
			li = document.createElement('li');
			fakelink = document.createElement('a');
			fakelink.id = target + '-' + key;
			fakelink.href = '#';
			bullet = document.createElement('span');
			bullet.innerHTML = '&nbsp;&bull;&nbsp;';
			bullet.setAttribute("aria-hidden", "true");
			n = 'n';
			n = document.querySelectorAll(showClass).length;
			counter = document.createElement('span');
			counter.innerHTML = ' (' + n + ')';
			counter.classList.add('counter');
			fakelink.appendChild(document.createTextNode(words));
			li.appendChild(bullet);
			li.appendChild(fakelink);
			li.appendChild(counter);
			document.getElementById(target).appendChild(li);	
		}
		
		function createFilterHeader(target, words) {
			h = document.createElement('h4');
			h.textContent = words;
			document.getElementById(target).appendChild(h);	
		}
		
		function createFilterMenu(target, menuId) {
			m = document.createElement('ul');
			m.id = menuId;
			m.classList.add('menu');
			document.getElementById(target).appendChild(m);
		}
		
		function createMenuItem(menuParent, itemClass, itemName, classPrefix) {
			showClass = '.' + classPrefix + '-' + itemClass;
			upperCasedName = itemName.charAt(0).toUpperCase() + itemName.slice(1);
			createMenuElement(menuParent, itemClass, upperCasedName, showClass);
			createMenuClickHandler(menuParent + '-' + itemClass, showClass, upperCasedName);
		}
		
		function createYearMenu(years) {
			createFilterHeader('yearfilter', 'Filter by year');
			createFilterMenu('yearfilter', 'year');
			years.forEach((year) => createMenuItem('year', year, year, 'y'));
		}
		
		function createPlaceMenu(places) {
			createFilterHeader('placefilter', 'Filter by place');
			createFilterMenu('placefilter', 'place');
			Object.keys(places).forEach((place) => createMenuItem('place', place, places[place], 'p'));
		}
		
		function createTopicMenu(topics) {
			createFilterHeader('topicfilter', 'Filter by topic');
			createFilterMenu('topicfilter', 'topic');
			topics.forEach((topic) => createMenuItem('topic', topic, topic, 't'));
		}
		
		createYearMenu(['all', '2023', '2022', '2021']);
		
		createPlaceMenu({
				all: 'All',
				bristol: 'Bristol',
				wc: 'West Country',
				somerset: 'Somerset',
				wiltshire: 'Wiltshire'
			});
			
		createTopicMenu(['all','architecture','engineering','history','transport','urbanism']); 
				
	});
