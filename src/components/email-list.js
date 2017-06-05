import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './email-list.css';

export function EmailList(props) {
    const emails = props.emailList.map(email =>
        <li key={email.id} className="email-list-email">
          <Link to={`/${props.folderId}/${email.id}`}>
            <div className="email-list-email-from">
                {email.from}
            </div>
            <div className="email-list-email-title">
                {email.title}
            </div>
          </Link>
        </li>
    );

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const folder = state[props.match.params.folderId];
    return {
        folderId: props.match.params.folderId,
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
