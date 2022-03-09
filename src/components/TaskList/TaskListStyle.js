import styled from 'styled-components'

export const TaskListContainer = styled.div`
	width: 97%;
	
	.taskList--item {
		height: 10vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #eee;
		border-radius: 5px;
		border: 1px solid #ccc;
		margin-bottom: 15px;

		button {
			background-color: transparent;
			border: 0;
			cursor: pointer;
		}

		.taskList--info {
			display: flex;
			align-items: center;

			.divider {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #444;
				margin: 0 15px;
			}
		}
	}
`