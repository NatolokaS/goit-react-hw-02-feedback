import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "components/Statistics/Statistics";
import css from "./Section.module.css";

export const Section = ({state, onLeaveFeedback,countTotalFeedback,countPositiveFeedbackPercentage})=>{
	return(
		<section className={css.main}>
			<h1 className={css.mainTitle}>Please leave feedback</h1>
			<div className={css.buttonsWrapper}>
				<FeedbackOptions
					onLeaveFeedback={onLeaveFeedback}
					options={Object.keys(state)}
				/>
			</div>
			{countTotalFeedback>0?
				<Statistics
				good={state.good}
				neutral={state.neutral}
				bad={state.bad}
				total={countTotalFeedback}
				positivePercentage={countPositiveFeedbackPercentage}/>:<Notification/>}
		</section>
	)
}