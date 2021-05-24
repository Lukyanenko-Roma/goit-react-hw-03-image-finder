
import axios from "axios";


const fetchImg = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=21690523-f00b23a29b2f49aed4e4c6015&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}
`
    )
    .then((response) => response.data.hits)
};

export default { fetchImg };

