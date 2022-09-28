import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    const handleAddToList = (exercise) => {
        console.log(exercise);
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 my-7'>
            <div className="exercise col-span-4 px-20">
                <h3 className='text-2xl font-semibold mt-4 mb-6'>Select today's exercise</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-5'>
                    {
                        exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleAddToList={handleAddToList}></Exercise>)
                    }
                </div>

            </div>
            <div className="cart col-span-1"><Cart></Cart></div>
        </div>
    );
};

export default Gym;