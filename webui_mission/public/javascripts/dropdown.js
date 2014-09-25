define(function() {
	function loadDropdown(data) {
		var newDropdownList = document.createElement('ul');
		newDropdownList.id = 'genreDropdownList';

		for(var i = 0; i < data.lists.length; i++) {
			var newDropdownListItem = document.createElement('li');
			newDropdownListItem.className = 'genreDropdownListItem';
			newDropdownListItem.id = 'genreDropdownListItem' + i;
			newDropdownListItem.innerHTML = data.lists[i].listname;
			newDropdownList.appendChild(newDropdownListItem);
		}

		return newDropdownList;
	}

	return {
		loadDropdown : loadDropdown
	}
});