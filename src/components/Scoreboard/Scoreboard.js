import { connect } from 'react-redux';

const Scoreboard = (props) => {
  return (
    <div className='scoreboard'>
      mismatches: { props.mismatches }
      matches: { props.matches }
    </div>
  );
};

const mapStateToProps = (state) => ({
  matches: state.game.matches,
  mismatches: state.game.mismatches,
});

export default connect(mapStateToProps)(Scoreboard);
