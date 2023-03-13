import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../features/auth/authSlice';

/**
 * Shows a banner for new users
 *
 * @example
 * <Banner />
 */
function Banner() {
  const appName = useSelector((state) => state.common.appName);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName.toLowerCase()}</h1>
        <p>A place to share your knowledge.</p>
        <img class="homepage-image"
          src="../../../../public/homepage_image.jpg"
          // src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          // src="public/homepage_image.jpg"
          alt="homepage-image"
        />
      </div>
    </div>
  );
}

export default memo(Banner);
