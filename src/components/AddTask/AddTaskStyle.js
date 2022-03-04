import styled from 'styled-components'

export const Container = styled.div`
	input[type="date"] {
		width: 50px;

		&::-webkit-datetime-edit-month-field, &::-webkit-datetime-edit-day-field, &::-webkit-datetime-edit-year-field {
			display: none;
		}
	}
`