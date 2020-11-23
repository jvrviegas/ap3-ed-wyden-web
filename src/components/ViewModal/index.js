import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MdImage } from 'react-icons/md';

import { theme } from './styles';

const useStyles = makeStyles(() => theme);

export default function TransitionsModal({
  openModal,
  setOpenModal,
  page,
  data,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const startDateFormatted = data.start_date
    ? format(utcToZonedTime(data.start_date, timezone), "dd/MM/yyyy 'às' HH:mm")
    : null;

  const endDateFormatted = data.end_date
    ? format(utcToZonedTime(data.end_date, timezone), "dd/MM/yyyy 'às' HH:mm")
    : null;

  const canceledDateFormatted = data.canceled_at
    ? format(
        utcToZonedTime(data.canceled_at, timezone),
        "dd/MM/yyyy 'às' HH:mm"
      )
    : null;

  useEffect(() => {
    if (openModal) {
      setOpen(true);
    }
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {page === 'orders' ? (
              <>
                <h3 className={classes.title}>Informações da encomenda</h3>
                <p
                  className={classes.text}
                >{`${data.recipient.street_name}, ${data.recipient.number}`}</p>
                <p
                  className={classes.text}
                >{`${data.recipient.town} - ${data.recipient.state}`}</p>
                <p className={classes.text}>{data.recipient.postal_code}</p>
                <hr className={classes.separator} />
                <h3 className={classes.title}>Datas</h3>
                {!data.canceled_at ? (
                  <>
                    <p className={classes.text}>
                      <span>
                        <b>Retirada:</b>{' '}
                        {data.start_date ? startDateFormatted : 'pendente'}
                      </span>
                    </p>
                    <p className={classes.text}>
                      <span>
                        <b>Entrega:</b>{' '}
                        {data.end_date ? endDateFormatted : 'pendente'}
                      </span>
                    </p>
                  </>
                ) : (
                  <p className={classes.text}>
                    <span>
                      <b>Cancelada:</b>{' '}
                      {data.canceled_at && canceledDateFormatted}
                    </span>
                  </p>
                )}
                <hr className={classes.separator} />
                <h3 className={classes.title}>Assinatura do destinatário</h3>
                <div className={classes.signature}>
                  {data.signature ? (
                    <img src={data.signature.url} alt={data.recipient.name} />
                  ) : (
                    <MdImage size={30} color="#ddd" />
                  )}
                </div>
              </>
            ) : (
              <>
                <h2 className={classes.title} id="transition-modal-title">
                  VISUALIZAR PROBLEMA
                </h2>
                <p
                  className={classes.problem}
                  id="transition-modal-description"
                >
                  {data.description}
                </p>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
};
