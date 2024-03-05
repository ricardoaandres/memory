import { connect } from 'react-redux';

const Scoreboard = (props) => {
  return (
    <div className='scoreboard'>
      <div className='scoreboard-score'>
        <i className="bi bi-check text-success"></i>
        Matches: { props.matches }
      </div>
      <div className='scoreboard-score'>
        <i className="bi bi-x text-danger"></i>
        Mismatches: { props.mismatches }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  matches: state.game.matches,
  mismatches: state.game.mismatches,
});

export default connect(mapStateToProps)(Scoreboard);
