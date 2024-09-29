import Conversation from '../models/conversation.js';
import Message from '../models/message.js';
import { getRSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js';

export const send = async (req, res) => {
  try {
    const { msg } = req.body;
    const { id: rId } = req.params;
    const { _id: sId } = req.user;

    if (sId == rId) {
      return res.status(400).json({
        error: 'Sender and Receiver should not be same...',
      });
    }
    let conversation = await Conversation.findOne({
      participants: { $all: [sId, rId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [sId, rId],
      });
    }

    const newMsg = new Message({
      sId,
      rId,
      msg,
    });

    if (newMsg) {
      conversation.messages.push(newMsg._id);
    }

    await Promise.all([conversation.save(), newMsg.save()]);

    const rSocId = getRSocketId(rId);
    if (rSocId) {
      io.to(rSocId).emit('newMsg', newMsg);
    }

    res.status(201).json(newMsg);
  } catch (e) {
    console.log('Error in send controller', e.message);
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

export const receive = async (req, res) => {
  try {
    const { id: rId } = req.params;
    const sId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [sId, rId] },
    }).populate('messages');

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (e) {
    console.log('Error in receive controller', e.message);
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};
