// Copyright 2021 mac
import React from 'react'
import { Link } from 'react-router-dom'

const UsersItems = ({ user: { login, html_url, avatar_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				className='round-img'
				style={{
					width: '60px',
				}}
				alt=''
			/>
			<h3>{login}</h3>
			<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
				More
			</Link>
		</div>
	)
}

export default UsersItems
