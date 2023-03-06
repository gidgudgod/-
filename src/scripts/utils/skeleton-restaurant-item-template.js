const createSkeletonRestaurantItem = () => ` <div class="restaurant">
      <div class="restaurant-card">
        <div class="restaurant-photo-wrapper">
          <div class="restaurant-photo skeleton skeleton-image"></div>
        </div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>`;

const createSkeletonRestaurantList = () => {
  let skeleton = '<div class=\'restaurant-list\'>';
  for (let i = 0; i < 10; i++) {
    skeleton += createSkeletonRestaurantItem();
  }
  skeleton += '</div>';
  return skeleton;
};

export { createSkeletonRestaurantItem, createSkeletonRestaurantList };
