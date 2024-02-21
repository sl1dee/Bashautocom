import TreatmentTypesCard from '@components/treatment-types/treatment-types-card/treatment-types-card.jsx'

const CariesTreatmentCard = () => {
	return (
		<TreatmentTypesCard
			title="Признаки кариеса"
			description="Если вы испытываете дискомфорт, вполне вероятно, что у вас начал развиваться кариес. Важно принять меры как можно скорее, так как промедление с лечением может привести к более серьёзным проблемам со здоровьем полости рта."
			cards={[
				{
					id: 0,
					title: 'Гиперчувствительность',
					text: 'Появление болезненных ощущений при взаимодействии с горячий, холодным, кислым и сладким'
				},
				{
					id: 1,
					title: 'Потемнение эмали',
					text: 'Появление на поверхности зуба небольших пятен белого, коричневого или чёрного цвета'
				},
				{
					id: 2,
					title: 'Неприятный запах',
					text: 'Без своевременного лечения зуб разрушается и гниёт, что и становится причиной появления неприятного запаха'
				}
			]}
		/>
	)
}

export default CariesTreatmentCard
