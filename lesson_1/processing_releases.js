let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// function processReleaseData(data) {
//   let isValid = ({id, title}) => id !== undefined && title !== undefined;
//   let objs = data.filter(isValid);

//   let getIdTitle = (arr, {id, title}) => {
//     arr.push({id, title});
//     return arr;
//   };
//   return objs.reduce(getIdTitle, []);
// }

function processReleaseData(data) {
  return data.filter(release => {
    return release.id !== undefined && release.title !== undefined;
  }).map(release => {
    return {id: release.id, title: release.title};
  });
}

console.log(processReleaseData(newReleases));

/* should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
*/