import ComponentsA from './ComponentsA';
import ComponentsC from './ComponentsC';
import ComponentsB from './ComponentsB';
import NoteState from './../Context/Notes/NoteState';

const Root = () => {
  return (
    <>
            <NoteState>
              
                <ComponentsA />
                <ComponentsB />
                <ComponentsC />
        </NoteState>
    </>
  )
}

export default Root