import styled from 'styled-components'

export const AddTaskContainer = styled.div`
	width: 97%;
	margin: auto;
	
	.formAddTask {
		width: 100%;
		height: 16vh;
		background-color: #eee;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 5px;
		border: 1px solid #ccc;
		margin: 15px 0;

		.formAddTask--field {
			width: 100%;
			display: flex;
			align-items: center;
			margin-top: 10px;
		}
		#task--title {
			width: 97%;
			font-size: 1rem;
			background-color: transparent;
			padding: 10px 15px;
			outline: none;
			border: 0;

			&:focus {
				background-color: #fff;
				border-bottom: 1px solid #007bff;
			}
		}

		.task--bottomLine {
			width: 97%;
			display: flex;
			margin: auto;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10px;

			#task--date {
				width: 50px;
				background-color: transparent;
				border: 0;
				outline: none;
				margin-left: -35px;
		
				&::-webkit-datetime-edit-month-field, &::-webkit-datetime-edit-day-field, &::-webkit-datetime-edit-year-field {
					display: none;
				}
		
				&::-webkit-calendar-picker-indicator {
					font-size: 1rem;
					cursor: pointer;
					color: #666;
				}
			}

			.btn-submit {
				display: flex;
				align-items: center;
				padding: 5px 10px;
				cursor: pointer;
				border-radius: 5px;
				border: 0;
			}
		}
	}
`