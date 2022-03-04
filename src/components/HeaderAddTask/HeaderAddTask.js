import React, { useState, useEffect } from 'react'

export default function() {
	const [currentDay, setCurrentDay] = useState({
		dayWeek: '',
		dayNumber: '',
		month: ''
	})

	Date.prototype.getWeekDayText = function() {
		let weekDays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
		return weekDays[this.getMonth()]
	}

	Date.prototype.getMonthText = function() {
		let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
		return months[this.getMonth()]
	}

	function getCurrentDay() {
		let d = new Date()
		let dayWeek = d.getWeekDayText()
		let dayNumber = d.getDate()
		let month = d.getMonthText()

		setCurrentDay({
			dayWeek: dayWeek < 10 ? '0' + dayWeek : dayWeek,
			dayNumber: dayNumber < 10 ? '0' + dayNumber : dayNumber,
			month: month < 10 ? '0' + month : month
		})
	}

	useEffect(() => {
		getCurrentDay()
	}, []);

    return (
			<div className="header">
				<h1>Meu dia</h1>
				<p>{ `${currentDay.dayWeek}, ${currentDay.dayNumber} de ${currentDay.month}` }</p>
			</div>
    )
}