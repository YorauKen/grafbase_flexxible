'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { deleteProject, fetchToken } from "@/lib/actions";
import { useRouter } from "next/navigation";

type Props = {
	projectId:string
}
const ProjectActions = ({projectId}:Props) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const router = useRouter();
	const handleDeleteProject = async () => {
		setIsDeleting(true);
		const { token } = await fetchToken();
		try {
			await deleteProject(projectId,token);
			router.push('/');
		} catch (error) {
			console.log(error);
		} finally {
			setIsDeleting(false);
		}
	}
  return (
	<>
		<Link href={`/edit-project/${projectId}`} className="flexCenter edit-action_btn">
			<Image src="/pencile.svg" alt="edit" height={15} width={15}  />
		</Link>
		<button
			type="button"
			className={`flexCenter delete-action_btn ${isDeleting ? 'bg-gray':'bg-primary-purple' }`}
			onClick={handleDeleteProject}
		>
			<Image src="/trash.svg" alt="delete" height={15} width={15}/>
		</button>
	</>
  )
}

export default ProjectActions