<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;



class SecurityController extends AbstractController
{
    /**
     * @Route("/register", name="registration")
     */
    public function registration(Request $request, ObjectManager $manager, UserPasswordEncoderInterface $encoder)
    {
        $registration = new User();        

        $form = $this->createForm(RegistrationType::class, $registration);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $hash = $encoder->encodePassword($registration, $registration->getPassword());

            $registration->setPassword($hash);

            $manager->persist($registration);
            $manager->flush();

            $this->addFlash(
                'success',
                "Inscription réussie"
            );

            return $this->redirectToRoute('admin_login');
        }

        return $this->render('admin/registration.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/login", name="admin_login")
     */
    public function login()
    {
        return $this->render('admin/login.html.twig');
    }

    /**
     * @Route("/lougout", name="admin_logout")
     */
    public function logout()
    {
        
    }

}
