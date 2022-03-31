import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://www.github.com/thiagocdn'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}