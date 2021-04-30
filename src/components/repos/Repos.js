import React from 'react'
import RepoItems from './RepoItem'
import PropTypes from 'prop-types';


const Repos = ({ repos }) => {

    return repos.map(repo => <RepoItems repo={repo} key={repos.id} />)

}

Repos.propType = {
    repos: PropTypes.array.isRequired,
    
}

export default Repos