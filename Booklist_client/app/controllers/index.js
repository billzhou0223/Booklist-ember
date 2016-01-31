import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['sort', 'order', 'filter', 'filterValue'],
	sort: null,
	order: null,
	filter: null,
	filterValue: null,

  //state controll
	showRefinement: false,
  isNotEditing: true,

	showOrder: Ember.computed('selectedSortOption', function() {
		var sortOption = this.get('selectedSortOption');
		return (sortOption && sortOption !== this.get('sortOptions.0.value'));
	}),

	showFilterValue: Ember.computed('selectedFilterOption', function() {
		var filterOption = this.get('selectedFilterOption');

		return (filterOption && 
						filterOption !== this.get('filterOptions.0.value') &&
						filterOption !== 'read' &&
						filterOption !== 'unread');
	}),

	sortOptions: [
    {
      label: 'None',
      value: 'none'
    },
    {
      label: 'Title',
      value: 'title'
    },
    {
      label: 'Author',
      value: 'author'
    },
    {
      label: 'Publication Year',
      value: 'pubYear'
    },
    {
      label: 'Purchase Date',
      value: 'purchaseDate'
    },
    {
      label: 'Rating',
      value: 'rating'
    },
    {
      label: 'Read',
      value: 'wasRead'
    }
  ],

  orderOptions: [
    {
      label: 'Ascending',
      value: 'ASC'
    },
    {
      label: 'Descending',
      value: 'DESC'
    }
  ],

  filterOptions: [
    {
      label: 'None',
      value: 'none'
    },
    {
      label: 'Title',
      value: 'title'
    },
    {
      label: 'Author',
      value: 'author'
    },
    {
      label: 'Publication Year',
      value: 'pubYear'
    },
    {
      label: 'Purchase Date',
      value: 'purchaseDate'
    },
    {
      label: 'Rating',
      value: 'rating'
    },
    {
      label: 'Read',
      value: 'read'
    },
    {
      label: 'Unread',
      value: 'unread'
    }
  ],

  //refine options
  selectedSortOption: null,

  selectedOrderOption: null,

  selectedFilterOption: null,

  selectedFilterValue: null,

  actions: {
  	toggleRefinement() {
  		this.set('showRefinement', !this.get('showRefinement'));
  	},

  	refineAction() {
  		var sortOption = this.get('selectedSortOption'),
  				orderOption = this.get('selectedOrderOption'),
  				filterOption = this.get('selectedFilterOption'),
  				filterValue = this.get('selectedFilterValue');

  		if(sortOption !== this.get('sortOptions.0.value')){
        if(orderOption === null) orderOption = 'ASC';

  			this.set('sort', sortOption)
  					.set('order', orderOption);
  		}else{
  			this.set('sort', null)
  					.set('order', null);
  		}

  		if(filterOption !== this.get('filterOptions.0.value')){
  			if(filterOption === 'read' || filterOption === 'unread'){
  				this.set('filter', 'wasRead')
              .set('filterValue', filterOption === 'read' ? 'true' : 'false');
  			}else{
  				this.set('filter', filterOption);

  				if(filterValue){
  					this.set('filterValue', filterValue);
  				}
  			}
  		}else{
  			this.set('filter', null)
  					.set('filterValue', null);
  		}
  	},
  },

  //clear all filter parameters when close filter list
  clearSearch: Ember.observer('showRefinement', function() {
    if(!this.get('showRefinement')) {
      this.set('sort',        null)
          .set('order',       null)
          .set('filter',      null)
          .set('filterValue', null)
          .set('selectedSortOption',   null)
          .set('selectedOrderOption',  null)
          .set('selectedFilterOption', null)
          .set('selectedFilterValue',  null);
    }
  }),

  //synchronize the filter states when refreshing the page
  syncFilterOnInit() {
    var sort          = this.get('sort'),
        order         = this.get('order'),
        filter        = this.get('filter'),
        filterValue   = this.get('filterValue'),
        hasValidFilter = false;

    if(sort) {
      this.set('selectedSortOption', sort);
      hasValidFilter = true;

      if(order) {
        this.set('selectedOrderOption', order);
      }
    }

    if(filter) {
      if(filter === 'wasRead') {
        if(filterValue === 'true') {
          this.set('selectedFilterOption', 'read');
        }else {
          this.set('selectedFilterOption', 'unread');
        }
      }else {
        this.set('selectedFilterOption', filter);

        if(filterValue) {
          this.set('selectedFilterValue', filterValue);
        }
      }
      hasValidFilter = true;
    }

    if(hasValidFilter) {
      this.set('showRefinement', true);
    }
  },

  init() {
    this._super();
    Ember.run.once(this, 'syncFilterOnInit');
  }
});