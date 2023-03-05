	document.addEventListener("DOMContentLoaded", function() {

		function menuToggle(menuId, menuParentClass, otherMenuId, otherMenuParent, showClass, pageTitle) {
			document.querySelectorAll('.menu a').forEach((element,index) => { element.classList.remove('active'); });
			document.getElementById(menuId).classList.add('active');
			
			// todo - set first a child of .menu a to active, then remove all on menuParentClass, then add as below
			// or even possibly use :not to avoid redoing eh
			document.getElementById(otherMenuId).classList.add('active');			
			document.querySelectorAll(".vidcard:not(" + showClass + ")").forEach((element,index) => { element.classList.add('hidden'); });
			document.querySelectorAll(".vidcard" + showClass).forEach((element,index) => { element.classList.remove('hidden'); });
			document.getElementById('indextitle').textContent = pageTitle + ' videos';
		}
		
		function createMenuClickHandler(menuId, menuParentClass, otherMenuId, otherMenuParent, showClass, pageTitle) {
			document.getElementById(menuId).addEventListener('click', function (event) {
				event.preventDefault();
				menuToggle(menuId, menuParentClass, otherMenuId, otherMenuParent, showClass, pageTitle);
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
		
		function createYearMenuItem(year) {
			showClass = year == 'all' ? '.all' : '.y' + year;
			upperYear = year.charAt(0).toUpperCase() + year.slice(1);
			createMenuElement('year', year, upperYear, showClass);
			createMenuClickHandler('year-' + year, '#year a', 'place-all', '#place a', showClass, upperYear);
		}

		function createPlaceMenuItem(place, placename) {
			showClass = '.' + place;
			createMenuElement('place', place, placename, showClass);
			createMenuClickHandler('place-' + place, '#place a', 'year-all', '#year a', showClass, placename);
		}
		
		function createTopicMenuItem(topic) {
			showClass = '.' + topic;
			upperTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
			createMenuElement('topic', topic, upperTopic, showClass);
			createMenuClickHandler('topic-' + topic, '#topic a', 'year-all', '#year a', showClass, upperTopic);
		}
		
		function createYearMenu(years) {
			createFilterHeader('yearfilter', 'Filter by year');
			createFilterMenu('yearfilter', 'year');
			years.forEach(createYearMenuItem);	
			document.getElementById('year-all').classList.add('active');
		}
		
		function createPlaceMenu(places) {
			createFilterHeader('placefilter', 'Filter by place');
			createFilterMenu('placefilter', 'place');
			Object.keys(places).forEach((place) => createPlaceMenuItem(place, places[place]));
			document.getElementById('place-all').classList.add('active');
		}
		
		function createTopicMenu(topics) {
			createFilterHeader('topicfilter', 'Filter by topic');
			createFilterMenu('topicfilter', 'topic');
			topics.forEach((topic) => createTopicMenuItem(topic));
			document.getElementById('topic-all').classList.add('active');
		}
		
		createYearMenu(['all', '2023', '2022', '2021']);
		
		createPlaceMenu({
				all: 'All',
				bris: 'Bristol',
				wc: 'West Country',
				somerset: 'Somerset',
				wiltshire: 'Wiltshire'
			});
			
		/* createTopicMenu(['all','architecture','engineering','transport','urbanism']); */
				
	});
