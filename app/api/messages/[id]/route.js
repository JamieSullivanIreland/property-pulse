import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userId } = sessionUser;
    const { id } = params;
    const message = await Message.findById(id);

    if (!message) {
      return new Response('Message not found', {
        status: 404,
      });
    }

    if (message.recipient.toString() !== userId) {
      return new Response('Unauthorised', {
        status: 401,
      });
    }

    // update message to reas/unread depending on the current status
    message.read = !message.read;

    await message.save();

    return new Response(JSON.stringify(message), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userId } = sessionUser;
    const { id } = params;
    const message = await Message.findById(id);

    if (!message) {
      return new Response('User ID is required', {
        status: 404,
      });
    }

    if (message.recipient.toString() !== userId) {
      return new Response('Unauthorised', {
        status: 401,
      });
    }

    await message.deleteOne();

    return new Response('Messaeg deleted', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};