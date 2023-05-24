// Actions methods
// GET "/about"
const about = (req, res) => {
  const iconSet = ['⭐', '🤖', '🍉', '🏎', '🦼', '🚨', '🍔', '🎭'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  // res.render('about/aboutView', { icon });
  res.send('👻 UNDER CONSTRUCTION: GET/about');
};

// Controlador user
export default {
  // Action Methods
  about,
};
