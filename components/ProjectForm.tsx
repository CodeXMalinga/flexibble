'use client';

import { SessionInterface } from "@/common.types";

type Props = {
    type: string,
    session: SessionInterface,
}

const ProjectForm = ({ type, session }: Props) => {

  const handleSubmit = (e: React.FormEvent) => {

  }  
  return (
    <form onSubmit={handleSubmit} className="flexStart form">
        <div className="flexStart form_image-container"></div>
    </form>
  )
}

export default ProjectForm