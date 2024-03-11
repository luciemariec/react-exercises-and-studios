import React from 'react';

class HobbyLinks extends React.Component {
render() {
const hobbyLinks = [
"https://www.thestorygraph.com/",
"https://www.depop.com/",
"https://www.etsy.com/"
];

return (
<div>
    <h3>My Hobbies</h3>
    <a href={hobbyLinks[0]}>StoryGraph</a><br />
    <a href={hobbyLinks[1]}>Depop</a><br />
    <a href={hobbyLinks[2]}>Etsy</a><br />
</div>
);
}
}
export default HobbyLinks;
