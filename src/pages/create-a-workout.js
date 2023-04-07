import ExerciseList from '@/components/ExerciseList';
import WorkOutGen from '../components/WorkOutGen';
import styles from '../styles/WorkOutGen.module.scss';
import SearchBar from '@/components/SearchBar';

import { useEffect, useState } from 'react';
function HomePage() {
	

	//exercises should be a function based off params
	const initialExercises = [
		{
			name: 'Single-Leg Press',
			type: 'strength',
			muscle: 'quadriceps',
			equipment: 'machine',
			difficulty: 'intermediate',
			instructions:
				'Load the sled to an appropriate weight. Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Maintain good spinal position with your head and chest up. Supporting the weight, fully extend the knee and unlock the sled. This will be your starting position. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. Do not allow your lumbar to take the load by moving your pelvis. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee. Complete all repetitions for one leg before switching to the other.',
		},
		{
			name: 'Landmine twist',
			type: 'strength',
			muscle: 'abdominals',
			equipment: 'other',
			difficulty: 'intermediate',
			instructions:
				'Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.',
		},
		{
			name: 'Weighted pull-up',
			type: 'strength',
			muscle: 'lats',
			equipment: 'other',
			difficulty: 'intermediate',
			instructions:
				"Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip. You'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position. Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing your shoulder blades back and down as you reach the top contracted position. After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched.",
		},
		{
			name: 'T-Bar Row with Handle',
			type: 'strength',
			muscle: 'middle_back',
			equipment: 'other',
			difficulty: 'intermediate',
			instructions:
				'Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position.',
		},
	];

	const [params, setParams] = useState({
		name: '',
		difficulty: '',
		type: '',
		muscleGroup: '',
		numberOfExercises: 6,
	});
	const [showResults, setShowResults] = useState(false);
	//adds keys (sets,weights,reps) to exercises
	const addKeys = (exercises, type = '') => {
		const Obj = {
			hypertropy: { sets: 4, reps: 12 },
			strength: { sets: 4, reps: 6 },
			endurance: { sets: 4, reps: 15 },
			'': { sets: 5, reps: 2 },
		};
		return exercises.map((exercise) => {
			exercise.sets = 5;
			exercise.reps = 5;
			exercise.weights = 0;
			return exercise;
		});
	};
	const [exercises, setExercises] = useState(addKeys(initialExercises, ''));

	//make a function that index the key value and the new value and updates the  state array
	const updateArray = (index, key, value) => {
		const newArray = [...exercises];
		newArray[index][key] = value;
		setExercises(newArray);
	};
	// function that removes exercise from the array
	const handleRemove = (name) => {
		const newExercises = exercises.filter((e) => e.name !== name);
		setExercises(newExercises);
	};
	// function that adds exercise to the array
	const handleAdd = (exercise) => {
		const newExercise = {...exercise, sets: 0, reps: 0, weights: 0}
		console.log('HANDLE ADD EXERCISE', exercise);
		setExercises((prev) => [...prev, newExercise]);
	};

	return (
		<div className={styles['page-layout']}>
			{!showResults && (
				<WorkOutGen
					params={params}
					setParams={setParams}
					setShowResults={setShowResults}
				/>
			)}
			{showResults && (
				<div className={styles['work-out-search-div']}>
					<SearchBar
						exercises={exercises}
						params={params}
						setParams={setParams}
						onAdd={handleAdd}
					/>
				</div>
			)}

			{showResults && (
				<ExerciseList
					exercises={exercises}
					onRemove={handleRemove}
					updateArray={updateArray}
				/>
			)}
		</div>
	);
}

export default HomePage;
