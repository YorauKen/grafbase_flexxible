type Props = {
	type?:string
	title:string
	state:string
	placeholder:string
	isTextArea:boolean
	setState:(value:string) => void
}
const FormField = ({type,title,placeholder,state,isTextArea,setState}:Props) => {

  return (
	<div className="flexStart flex-col w-full gap-4">
		<label className="w-full text-gray-100">
			{title}
		</label>
		{isTextArea ? (
			<textarea 
				className="form_field-input" 
				placeholder={placeholder}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		):(
			<input
				type={ type || "text" }
				className="form_field-input" 
				placeholder={placeholder}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		)}
	</div>
  )
}

export default FormField